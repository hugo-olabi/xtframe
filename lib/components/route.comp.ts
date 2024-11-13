import { ElementOrString } from "../htmlT";
import { render,apply } from "../utils/funcs";
import { RouteObject, RoutePath, RouterExpect, RouterLoadingElements, RouterPathWay, RouterProps, RouterRegistry, RoutingCallback, routingType } from "../utils/utilsT";

interface RoutingPriv extends routingType {
    __listeners?: RoutingCallback[];
    __ongetcss?: (scriptCtx: ImportMeta, cssContent: string) => void
}

(window.routing as RoutingPriv) = window.routing || {
    DEBUG: false,
    hashMode: false,
    way: [newRouterPathWay()],
    cached: {},
    update: routingUpdate,
    goto: goto,
    onget: onget,
    addListener: addListener,
    removeListener: removeListener,
    __ongetcss: __ongetcss,
    __listeners: []
};

window.addEventListener("load", window.routing.update);
window.addEventListener("popstate", window.routing.update);
window.addEventListener("hashchange", window.routing.update);

// Methods and Functions

function newRouterPathWay(): RouterPathWay {
    return {
        pathname: "",
        args: {},
        params: {},
        hash: "",
        routers: [],
        expect: { args: {}, params: {} }
    }
}

function routingUpdate() {
    const paths: string[] = [];
    var hash = window.location.hash;
    var i = 0;

    if (!window.routing.hashMode) { //Convert to hash mode way
        hash = `#${window.location.pathname}${window.location.search}${hash}`;
    }

    const h = hash.substring(1).split("##/")[0];
    hash = hash.replace(`#${h}`, "");

    paths.push(h); // Add the main path

    if (hash) { // Add secondary paths
        paths.push(...hash.split("##/")
            .map(segment => `/${segment}`));
    }

    for (const path of paths) {
        if (!window.routing.way[i]) window.routing.way[i] = newRouterPathWay();

        window.routing.way[i].pathname = path;
        processWay(path, i++)
    }
}

function extractPaths(path: string): string[] {
    var paths: string[] = [], pathsI = -1;

    for (const p of path) {
        if (p === "/") {
            paths.push(p)
            pathsI++;
        } else {
            paths[pathsI] += p
        }
    }
    return paths;
}

function genUrlParams(w: RouterPathWay) {
    const params = w.params;

    if (Object.keys(params).length === 0) return "";

    var txt = "?"; var i = -1;

    for (const [k, v] of Object.entries(params)) {
        txt += `${++i > 0 ? "&" : ""}${k}=${v}`
    }

    return txt;
}

function goto(path: string, index = 0) {
    const paths = [];

    for (const w of window.routing.way) {
        var p = "";
        if (index == 0) {
            p = path;
        } else {
            var p = `${w.pathname}${genUrlParams(w)}${w.hash}`;
        }
        if (p.length > 0) paths.push(p);
        index--;
    };

    history.pushState(null, "", `${window.routing.hashMode ? "#" : ''}${paths.join('##')}`);

    window.routing.update();
}

function processWayRoute(result: string[], i: number, router: RouterRegistry) {
    // prevent empty urls | [] => ["/"]
    if (result.length === 0) result.push("/")

    for (const [k, v] of Object.entries(router.paths)) {
        const paths = extractPaths(k)
        let [isMatch, ended, pathI] = [true, false, 0];
        let args: { [key: string]: any } = {}

        //console.log(paths)

        for (var path of paths) {
            if (path.startsWith("/$")) {
                const keys = path.substring(2).split("=");
                const key = keys[0];
                const value: string | undefined = keys[1];
                if (window.routing.way[i].expect.args[key]) {
                    args[key] = window.routing.way[i].expect.args[key](value);
                } else {
                    args[key] = value || "";
                }
                path = `/${value}`;

                console.log(path, key, value)
            }
            if (path.startsWith("/:") && result[pathI] && result[pathI].length > 1) {  // It's an arg
                const key = path.substring(2);
                const value = result[pathI].substring(1);

                if (window.routing.way[i].expect.args[key]) {
                    args[key] = window.routing.way[i].expect.args[key](value);
                } else {
                    args[key] = value;
                }
                
            } else if (path === "/*") {  // Wildcard
                continue
            } else if (path === "/**") {
                //console.log("ended", result[pathI])
                ended = true;
                break
            } else if (path !== result[pathI]) {  // Mismatch
                isMatch = false;  // If any path doesn't match, break
                break;
            }
            pathI++;  // Keep track of index for result array
        }
        if (window.routing.DEBUG) {
            let is = isMatch && result.length === paths.length
            console.log(`${k}: ${is ? "MATCH" : "skipped-> " + isMatch ? "length mismatch " + paths.length + " - " + result.length : "path mismatch"} `)
        }

        // If all parts match or it's the end of the path, append the value
        if (isMatch && result.length === paths.length || ended) {
            window.routing.way[i].args = args; //apply only args of matched path
            router.target.setAttribute("page", v.name)
            render(router.target, ...v.handler())

            const p = window.routing as RoutingPriv;
            
            if(p.__listeners) for (const l of p.__listeners) l(v.name)

            break;
        }
    }
    //console.log("404 not catch", result, window.routing.way[i].pathname)
    
}

function assignExpect(i: number, expect: RouterExpect) {
    if (expect.params) {
        Object.assign(window.routing.way[i].expect.params, expect.params);
    }
    if (expect.args) {
        Object.assign(window.routing.way[i].expect.args, expect.args);
    }
}

function processWay(path: string, i: number) {
    const paths = extractPaths(path)
    var realPaths: string[] = []

    for (const path of paths) {
        var realPath: string, hash, params;
        [realPath, hash] = path.split("#")

        if (hash) {    // Get param if defined after hash
            [hash, params] = hash.split("?")
            window.routing.way[i].hash = '#' + hash;
        }
        if (!params) { // Get param if defined before hash
            [realPath, params] = realPath.split("?")
        }

        

        realPaths.push(realPath)

        for (const [k, v] of (new URLSearchParams(params))) {
            //console.log(k, v)
            if (window.routing.way[i].expect.params[k]) {
                // Custom Converter
                window.routing.way[i].params[k] = window.routing.way[i].expect.params[k](v)
            } else {
                // String
                window.routing.way[i].params[k] = v
            }
        }
    }

    window.routing.way[i].pathname = realPaths.join("/")

    for (const rout of window.routing.way[i].routers) {
        processWayRoute(realPaths, i, rout)
    }
}

function regRouter(target: HTMLElement, props: RouterProps, ...content: RoutePath[]) {
    props.index = props.index || 0;
    if (!window.routing.way[props.index]) { // Initialize Routerpathway
        window.routing.way[props.index] = newRouterPathWay();
    }

    // Merge expected params and args
    if (props.expect) {
        assignExpect(props.index, props.expect)
    }

    const paths: {
        [key: string]: RouteObject
    } = {};

    // Process content routes
    for (const p of content) {
        if (p.query) {
            var name = p.content as string;

            paths[p.path] = {
                name: name
                    .substring(0, lastIndexGood(name, ".js") || lastIndexGood(name, ".ts") || name.length),
                handler: () => get(p.content as string, target, props.loading_elem),
            }
        } else {
            paths[p.path] = {
                name: (p.content as Function).name.length > 0 ? (p.content as Function).name : "anonymous",
                handler: p.content as Function,
            }
        }
    }

    window.routing.way[props.index].routers.push({
        target,
        paths: paths
    });
}

function lastIndexGood(str: string, searchString: string, position?: number): number | undefined {
    const index = str.lastIndexOf(searchString, position);
    return index === -1 ? undefined : index;
}

function addListener(func: RoutingCallback) {
    const p =(routing as RoutingPriv)
    if(p.__listeners)p.__listeners.push(func);
}

function removeListener(func: Function) {
    const p =(routing as RoutingPriv)
    if(p.__listeners)p.__listeners = p.__listeners.filter(f => f !== func);
}


function get(url: string, target: HTMLElement, loading_elem?: RouterLoadingElements) {
    if(url.endsWith(".page.js") || url.endsWith(".page.ts")){
        url = url.substring(0, url.length - 3)
    }else if(!url.endsWith(".page")){
        throw "Unsuported file extension: " + url + "! Suported types: .page.js, .page.ts"
    }

    if (window.routing.cached[url]) {
        const elem: ElementOrString[] = [];

        if (window.routing.cached[url].children) {
            elem.push(...(window.routing.cached[url].children as ElementOrString[]));
        }
        if (window.routing.cached[url].renderFn) {
            elem.push(...(window.routing.cached[url].renderFn as Function)())
        }
        if(window.routing.cached[url].css){
            const st = style(); st.innerHTML = window.routing.cached[url].css || ""
            elem.push(st);
        }
        return elem;
    }

    

    const sc = script({ type: "module", src: `${url}.js` });
    const el = div({xtifyRGetSrc: url})

    if (loading_elem) {
        for (const ld_el of loading_elem) {
            if (ld_el.paths.includes(url)) {
                render(el, ld_el.elem())
            }
        }
    }
    el.appendChild(sc);

    return [el];
}

function __ongetcss(styleCtx: ImportMeta, cssContent: string) {
    const url = styleCtx.url.replace(window.location.origin, "").split('?')[0].replace(".js", "");

    if(!window.routing.cached[url]) window.routing.cached[url] = {renderFn: undefined, children: undefined, time: NaN}

    window.routing.cached[url].css = cssContent;
}

function onget(scriptCtx: ImportMeta, ...content: (Function | ElementOrString)[]) {
    const url = scriptCtx.url.replace(window.location.origin, "").split('?')[0].replace(".js", "");

    // Select the div elements and link elements using the URL
    const t = document.querySelectorAll(`div[xtify-rget-src="${url}"]`);

    // Create or update time for caching issues
    if(!window.routing.cached[url]) window.routing.cached[url] = {time: performance.now()}
    else {window.routing.cached[url].time = performance.now()}

    if (typeof content[0] === "function") {
        window.routing.cached[url].renderFn = content[0]
    } else {
        window.routing.cached[url].children = content as ElementOrString[]
    }

    for (const tc of t) {
        const css = window.routing.cached[url].css;
        const elems: ElementOrString[] = [];

        if(css){
            const st = style(); st.innerHTML = css;
            elems.push(st)
        }

        // Render the content inside the parent element
        if (typeof content[0] === "function") {
            elems.push(...content[0]());
        } else {
            elems.push(...content as ElementOrString[]);
        }

        render(tc.parentElement as HTMLElement, ...elems);
        
    }
}

export const routing = window.routing;

export function route(path: string, content: string | Function): RoutePath {
    const [query, _isroute] = [typeof content === "string", true];

    return {
        path,
        content,
        query,
        _isroute
    }
}


export function router(props?: RouterProps, ...content: RoutePath[]): HTMLElement;
export function router(...content: RoutePath[]): HTMLElement;


export function router(...content: (RoutePath | RouterProps | undefined)[]): HTMLElement {
    var dsets: RouterProps = {};

    const target = div()

    if (!(content[0] as RoutePath)._isroute) {
        console.log("why this wont work", content[0])
        const prop = content[0] as RouterProps;
        dsets.index = prop.index;
        dsets.expect = prop.expect;
        dsets.loading_elem = prop.loading_elem;
        content.shift();
    }

    regRouter(target, dsets, ...content as RoutePath[])

    return target;
};