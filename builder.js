const esbuild = require('esbuild');
const fs = require('fs');
const path = require('path');
const gaze = require('gaze');
const chokidar = require('chokidar')

const pagesDir = './src/pages';
const rootPath = './'
const minify = false;
const sourcemap = true;

// Utility function to get all page files with .page.ts or .page.js extension
function getPageFiles() {
    const pages = {}

    if (fs.existsSync(pagesDir)) fs.readdirSync(pagesDir)
        .filter(file => file.endsWith('.page.ts') || file.endsWith('.page.js') || file.endsWith('.page.css'))
        .map(file => path.join(pagesDir, file)).forEach(
            (entryPath) => {
                let basename = path.basename(entryPath, path.extname(entryPath));

                if (!pages[basename]) pages[basename] = {};

                if (entryPath.endsWith('.page.css')) {
                    pages[basename].css = entryPath
                } else {
                    pages[basename].js = entryPath;
                }
            }
        );

    return Object.values(pages);
}

async function importStyles() {
    const stylepath = "./src/styles/"

    if (!fs.existsSync(stylepath)) {
        return []
    }

    const styleFiles = fs.readdirSync(stylepath).filter(file => file.endsWith('.css'));

    if (!fs.existsSync("./public/styles")) {
        fs.mkdirSync("./public/styles");
    }

    styleFiles.forEach((file) => {
        fs.copyFileSync(stylepath + file, "./public/styles/" + file);
    })

    return styleFiles;
}

// Bundle main.ts
async function bundleMain() {

    try {
        await esbuild.build({
            entryPoints: ['./src/app.ts'],
            bundle: true,
            outfile: './public/app.js',
            minify: minify,
            format: 'esm',
            sourcemap: sourcemap,
        });

        await esbuild.build({
            entryPoints: ['./lib/window.ts'],
            bundle: true,
            outfile: './public/lib/xtify.js',
            minify: minify,
            format: 'esm',
            sourcemap: sourcemap,
        });
    } catch (err) {
        console.log(err)
    }
}

async function build(entry = "", output = "") {
    try {
        await esbuild.build({
            entryPoints: [entry],
            bundle: true,
            outfile: output,
            minify: minify,
            format: 'esm',
            sourcemap: sourcemap,
        })
    } catch (err) {
        console.log(err)
    }
}

// Bundle individual pages dynamically based on their extensions
async function bundlePages() {
    const pages = getPageFiles();

    if (!fs.existsSync("./src/pages")) {
        return
    }

    await Promise.all(
        [
            ...pages.map(async (page) => {
                const outputPath = `./public/pages/${path.basename(page.js, path.extname(page.js))}.js`; // Convert to .js

                if (!page.js) throw "Page definition missing! Make sure of making a .page.ts or .page.js file for each page.";

                console.log("PP:", page.js)

                buildPage(page.js);
            }),
        ]
    );
}

function buildPage(pagePath) {
    const outputPath = `./public/pages/${path.basename(pagePath, path.extname(pagePath))}.js`; // Convert to .js

    const stylepagePath = pagePath.replace(".page.js", ".page.css").replace(".page.ts", ".page.css");
    
    let scriptpagePath = `./${pagePath.replace(".page.css", ".page.js")}`

    if(scriptpagePath.endsWith(".page.css")){
        if(!fs.existsSync(scriptpagePath)){
            scriptpagePath = pagePath.replace(".page.js", ".page.ts")
        }
    }

    console.log("SSC", scriptpagePath, outputPath)
    try {
    esbuild.buildSync({
        entryPoints: [scriptpagePath],
        bundle: true,
        outfile: outputPath,
        minify: minify,
        format: 'esm',
        sourcemap: sourcemap
    })}
    catch (err) {
        console.log(err)
        return
    };
    let script = fs.readFileSync(outputPath).toString();

    if (fs.existsSync(stylepagePath)) {
        let style = fs.readFileSync(stylepagePath).toString();

        style = style.replace(/\[self\]/g, `[page="/${path.relative("./public",outputPath.replace(".page.js", ".page"))}"]`);

        style = esbuild.transformSync(style, {
            loader: 'css',
            minify: minify,
        }).code;

        //if(style.endsWith("\n")) style = style.substring(0, style.length - 1);

        script = `routing.__ongetcss(import.meta,${JSON.stringify(style)});\n${script}`
    }
    fs.writeFileSync(outputPath, script);
}

// Inject the bundled main script into the HTML file
async function injectScript() {
    const htmlFilePath = path.resolve('./src/index.html');
    let html = fs.readFileSync(htmlFilePath, 'utf8');

    const mainScript = fs.readFileSync(path.resolve('./public/app.js'), 'utf8');
    const libScript = fs.readFileSync(path.resolve('./public/lib/xtify.js'), 'utf8');
    const styles = [...await importStyles(), ...await moveCompCss()];
    //console.log(styles)

    var body = (sourcemap ?
        '<script src="' + rootPath + 'lib/xtify.js" type="module"></script>' :
        `<script type="module">${libScript}</script>`)
        + (sourcemap ?
            '<script src="' + rootPath + 'app.js" type="module"></script>' :
            `<script type="module">${mainScript}</script>`);

    var head = styles.map((style) => {
        return `<link rel="stylesheet" href="${rootPath}styles/${path.basename(style, path.extname(style))}.css">`;
    }).join('');

    if (!sourcemap) {
        fs.rmSync('./public/app.js');
        fs.rmSync('./public/lib/xtify.js');
    }

    if (fs.readdirSync("./public/lib").length <= 0) {
        fs.rmSync("./public/lib", { recursive: true });
    }

    // Write modified HTML to the dist folder
    fs.writeFileSync('./public/index.html', html
        .replace('<xtify-head>', head)
        .replace('<xtify-body>', body)
    );
}

async function moveIcons() {
    const iconsDir = path.resolve('./src/icons');
    const distDir = path.resolve('./public/icons');

    if (!fs.existsSync(iconsDir)) {
        return
    }

    MDIR(distDir);

    const files = fs.readdirSync(iconsDir);

    for (const file of files) {
        const srcPath = path.join(iconsDir, file);
        const destPath = path.join(distDir, file);

        fs.copyFileSync(srcPath, destPath);
    }
}
let f = "d", i = 2

// Watch for file changes and rebuild accordingly
function watchFiles() {

    chokidar.watch('./src/').on('all', async (event, cpath) => {
        console.log("File changed:", cpath);
        console.log(path.relative('./src/', cpath))
        try {
            if (cpath.endsWith('.ts') || cpath.endsWith('.js')) {
                bundlePages(); // Bundle pages dynamically
                await bundleMain();
                injectScript();
            } else if (cpath.endsWith('index.html')) {
                console.log('Reinjecting script into index.html...');
                injectScript(); // Re-inject into index.html
            } else if (cpath.endsWith('.page.js') || cpath.endsWith('.page.ts') || cpath.endsWith('.page.css')) {
                buildPage(cpath);
            } else if (cpath.endsWith('.comp.css')) {
                CSSCompUtils(cpath, `./public/styles/${path.basename(cpath, path.extname(cpath))}.css`)
                if (!fs.existsSync("./public/styles/" + path.basename(cpath))) {
                    await injectScript();
                }
            }
            else if (cpath.endsWith('.css') && path.relative('./', cpath).startsWith('src/styles/')) {
                //console.log('Updating existing CSS file...', "./public/styles/" + path.basename(cpath, path.extname(cpath)) + '.css');
                fs.copyFileSync(cpath, "./public/styles/" + path.basename(cpath, path.extname(cpath)) + '.css');
                if (!fs.existsSync("./public/styles/" + path.basename(cpath))) {
                    await injectScript();
                }
            } else if (cpath.endsWith('.png') || cpath.endsWith('.svg') || cpath.endsWith('.jpg') || cpath.endsWith('.jpeg') || cpath.endsWith('.webp') || cpath.endsWith('.ico')) {
                console.log('Moving icon files...');
                moveIcons(); // Move icon files
            }
            console.log('Rebuild completed successfully.');
        } catch (err) {
            console.error('Rebuild failed:', err);
        }
    });
}

function lastIndexGood(str, searchString, position) {
    const index = str.lastIndexOf(searchString, position);
    return index === -1 ? undefined : index;
}

async function CSSCompUtils(inputPath, outputPath) {
    var cssContent = fs.readFileSync(inputPath, 'utf8');
    //replace [self] with the component name
    cssContent = cssContent.replace(/\[self\]/g, `[comp="${path.basename(inputPath, ".comp.css")}"]`);
    fs.writeFileSync(outputPath, cssContent);
}

async function moveCompCss() {
    const compCssDir = path.resolve('./src/components');
    const files = fs.readdirSync(compCssDir);
    const cssFiles = []

    if (!fs.existsSync(compCssDir)) {
        return cssFiles
    }

    const distDir = path.resolve('./public/styles');
    MDIR(distDir);

    for (const file of files) {
        if (file.endsWith('.comp.css')) {
            const srcPath = path.join(compCssDir, file);
            const destPath = path.join(distDir, file);

            cssFiles.push(
                path.relative('./public/', destPath)
            );

            CSSCompUtils(srcPath, destPath);
        }
    }

    return cssFiles;
}

function MDIR(path) {
    if (!fs.existsSync(path)) {
        fs.mkdirSync(path, { recursive: true });
    }
}

// Run the builder
async function build() {
    try {

        await bundleMain();  // Bundle main.ts
        await bundlePages(); // Bundle pages dynamically
        await injectScript(); // Inject main.js into index.html
        await moveIcons();
        console.log('Initial build completed successfully.');

        watchFiles(); // Start watching for changes
    } catch (err) {
        console.error('Build failed:', err);
    }
}

// Start the build process
build();
