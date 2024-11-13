import { ElementOrString, NodeProps } from "../htmlT";
import { render } from "../utils/funcs";
import { createElement } from "../utils/html"
import { RouterPathWay, RouterRegistry, LoadingElements, RouterProps, RoutePath, RouterExpect } from "../xtify";


declare global {
    interface Window {
        routing: RouterClass;
    }
}


function newPathWay(): RouterPathWay {
    return {
        pathname: "",
        args: {},
        params: {},
        hash: "",
        routers: [],
        expect: {
            args: {},
            params: {}
        }
    }
}

export class RouterClass {
    DEBUG: boolean = false;
    hashMode: boolean = false;
    way: RouterPathWay[] = [
        newPathWay()
    ];
    cached: {
        [key: string]: {
            children?: ElementOrString[];
            renderFn?: Function
            time: number;
        }
    } = {};

    constructor() {
        window.addEventListener("popstate", () => {
            console.log("rendering by popstate")
            this.update()
        })

        window.addEventListener("hashchange", () => {
            console.log("rendering by hashchange")
            this.update()
        })

        window.addEventListener("load", () => {
            console.log("rendering by load")
            this.update()
        })
    }


    update() {
        const paths: string[] = [];
        var hash = window.location.hash;
        var i = 0;

        if (!this.hashMode) {
            hash = `#${window.location.pathname}${window.location.search}${hash}`;
            //Convert to hash mode way
        }

        const h = hash.substring(1).split("##/")[0];
        hash = hash.replace(`#${h}`, "");
        paths.push(h);

        if (hash) {
            paths.push(...hash.split("##/").filter(Boolean).map(segment => `/${segment}`));
        }

        //console.log(paths)

        for (const path of paths) {
            if (!this.way[i]) this.way[i] = newPathWay();

            this.way[i].pathname = path;
            this.processWay(path, i++)
        }
    }

    private processWay(path: string, i: number) {
        const paths = this.extractPaths(path)
        var realPaths: string[] = []

        //console.log(i, paths)

        for (const path of paths) {
            var realPath: string, hash, params;
            [realPath, hash] = path.split("#")

            if (hash) {    // Get param if defined after hash
                [hash, params] = hash.split("?")
                this.way[i].hash = '#' + hash;
            }
            if (!params) { // Get param if defined before hash
                [realPath, params] = realPath.split("?")
            }

            this.way[i].pathname = realPath;

            realPaths.push(realPath)

            for (const [k, v] of (new URLSearchParams(params))) {
                //console.log(k, v)
                if (this.way[i].expect.params[k]) {
                    // Custom Converter
                    this.way[i].params[k] = this.way[i].expect.params[k](v)
                } else {
                    // String
                    this.way[i].params[k] = v
                }
            }
        }

        for (const rout of this.way[i].routers) {
            this.processWayRoute(realPaths, i, rout)
        }
    }

    private processWayRoute(result: string[], i: number, router: RouterRegistry) {
        // To track if paths match
        if (result.length === 0) result.push("/")

        for (const [k, v] of Object.entries(router.paths)) {
            const paths = this.extractPaths(k)
            let [isMatch, ended, pathI] = [true, false, 0];
            //console.log(isMatch, ended, pathI, result, k, v)

            for (var path of paths) {

                if (path.startsWith("/$")) {
                    const keys = path.substring(2).split("=");
                    const key = keys[0];
                    const value = keys[1];
                    if (this.way[i].expect.args[key]) {
                        this.way[i].args[key] = this.way[i].expect.args[key](value);
                    } else {
                        this.way[i].args[key] = value;
                    }
                    path = `/${value}`;

                    //console.log(key, value)
                }

                if (path.startsWith("/:") && result[pathI] && result[pathI].length > 1) {  // It's an arg
                    const key = path.substring(2);
                    const value = result[pathI].substring(1);

                    if (this.way[i].expect.args[key]) {
                        this.way[i].args[key] = this.way[i].expect.args[key](value);
                    } else {
                        this.way[i].args[key] = value;
                    }
                } else if (path === "/*") {  // Wildcard
                    continue
                } else if (path === "/**") {
                    console.log("ended", result[pathI])
                    ended = true;
                    break
                } else if (path !== result[pathI]) {  // Mismatch
                    isMatch = false;  // If any path doesn't match, break
                    break;
                }
                pathI++;  // Keep track of index for result array
            }
            if (true) {
                let is = isMatch && result.length === paths.length
                //console.log(`${k}: ${is ? "MATCH" : "skipped-> " + isMatch ? "length mismatch " + paths.length + " - " + result.length : "path mismatch"} `)
            }

            // If all parts match or it's the end of the path, append the value
            if (isMatch && result.length === paths.length || ended) {
                //console.log(v())
                render(router.target, ...v())
                break;
            }
        }
    }

    private assignExpect(i: number, expect: RouterExpect) {
        if (expect.params) {
            Object.assign(this.way[i].expect.params, expect.params);
        }
        if (expect.args) {
            Object.assign(this.way[i].expect.args, expect.args);
        }
    }

    genUrlParams(w: RouterPathWay) {
        const params = w.params;

        if (Object.keys(params).length === 0) return "";

        var txt = "?"; var i = -1;

        for (const [k, v] of Object.entries(params)) {
            txt += `${++i > 0 ? "&" : ""}${k}=${v}`
        }

        //console.log(txt);

        return txt;
    }

    goto(path: string, index = 0) {
        const paths = [];

        for (const w of this.way) {
            var p = "";
            if (index == 0) {
                p = path;
            } else {
                //console.log(w)
                var p = `${w.pathname}${this.genUrlParams(w)}${w.hash}`;
                //console.log(p)
            }

            if (p.length > 0) paths.push(p);
            index--;
        };

        history.pushState(null, "", `${this.hashMode ? "#" : ''}${paths.join('##')}`);


        this.update();
    }

    regRouter(target: HTMLElement, props: RouterProps, ...content: RoutePath[]) {
        props.index = props.index || 0;
        if (!this.way[props.index]) {
            this.way[props.index] = newPathWay();  // Initialize pathway
        }

        // Merge expected params and args
        if (props.expect) {
            this.assignExpect(props.index, props.expect)
        }

        const paths: { [key: string]: Function } = {};

        // Process content routes
        for (const p of content) {
            if (p.query) {
                paths[p.path] = () => this.get(p.content as string, target, props.loading_elem);
            } else {
                paths[p.path] = p.content as Function;
            }
        }

        //console.log(paths)

        this.way[props.index].routers.push({
            target,
            paths: paths
        });
    }

    private get(url: string, target: HTMLElement, loading_elem?: LoadingElements) {
        const scripttype = "js";
        const cssLoad = url.endsWith(".page");

        const scripturl = `${url}${cssLoad ? `.${scripttype}` : ""}`
        const sc = createElement("script") as HTMLScriptElement; sc.type = "module"; sc.src = scripturl;

        console.log(cssLoad, scripturl)
        if (this.cached[scripturl]) {

            if (this.cached[scripturl].children) {
                return this.cached[scripturl].children as ElementOrString[];
            }

            if (this.cached[scripturl].renderFn) {
                return (this.cached[scripturl].renderFn as Function)()
            }
        }



        const el = document.createElement("div")

        const st: undefined | HTMLLinkElement = cssLoad ? createElement("link") as HTMLLinkElement : undefined;

        if (loading_elem) {
            for (const ld_el of loading_elem) {
                if (ld_el.paths.includes(url)) {
                    render(el, ld_el.elem())
                }
            }
        }

        el.setAttribute("xtify-r-get-src", `${url}${cssLoad ? `.${scripttype}` : ""}`);
        el.appendChild(sc);
        if (false) {
            const link = st as HTMLLinkElement;

            link.rel = "stylesheet";
            link.href = `${url}.css`;
            link.setAttribute("xtify-r-get-src", `${url}.css`);
            el.appendChild(link);
        }

        return [el];
    }

    onget(scriptCtx: ImportMeta, ...content: (ElementOrString | Function)[]) {
        const url = scriptCtx.url.replace(window.location.origin, "").split('?')[0];
        console.log(url);

        // Select the div elements and link elements using the URL
        const t = document.querySelectorAll(`div[xtify-r-get-src="${url}"]`);
        const css = document.querySelectorAll(`link[xtify-r-get-src="${url.replace(".page.js", ".page.css").replace(".page.ts", ".page.css")}"]`);

        // Create an array to store the cloned link elements
        const linkCache: HTMLElement[] = [];

        // Clone and cache the link elements before rendering
        css.forEach(link => {
            linkCache.push(link.cloneNode(true) as HTMLElement);  // Clone the <link> element
        });
        const styled = false// linkCache.length > 0;

        //TODO: This need to be reworked

        if (typeof content[0] === "function") {
            this.cached[url] = {
                renderFn: content[0],
                time: performance.now()
            }
            console.log("func", this.cached)
        } else {
            if (styled) {
                content = [linkCache[0], ...content]
            }
            this.cached[url] = {
                children: content as ElementOrString[],
                time: performance.now()
            }
            console.log("array", this.cached)
        }



        for (const tc of t) {
            // Render the content inside the parent element
            if (typeof content[0] === "function") {
                if (styled) {
                    render(tc.parentElement as HTMLElement, linkCache[0], ...content[0]());
                } else {
                    render(tc.parentElement as HTMLElement, ...content[0]());
                }
            } else {

                render(tc.parentElement as HTMLElement, ...content as ElementOrString[]);
            }
        }
        console.log("at end", this.cached)
    }

    private extractPaths(path: string): string[] {
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
}

export function route(path: string, content: string | Function): RoutePath {
    const [query, _isroute] = [typeof content === "string", true];

    return {
        path,
        content,
        query,
        _isroute
    }
}

export function router(...content: (RouterProps | RoutePath)[]): HTMLElement {
    var dsets: RouterProps = {};

    const target = createElement("div")

    if (!(content[0] as RoutePath)._isroute) {
        const prop = content[0] as RouterProps;
        dsets.index = prop.index;
        dsets.expect = prop.expect;
        dsets.loading_elem = prop.loading_elem;
        content.shift();
    }

    routing.regRouter(target, dsets, ...content as RoutePath[])

    return target;
};

if (!window.routing) window.routing = new RouterClass();

export const routing = window.routing;

