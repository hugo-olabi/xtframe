import { ElementString } from "./core";
import { div, h1 } from "./html5";

var a = [
    div(
        "hello",
        h1("heading")
    ),
    "text Hello"
]

var b = [
    div(
        "hello",
        h1("headindeg")
    ),
    "text Hello"
]

function ElementStringToNodes(content: ElementString[]): Node[] {
    const nodes: Node[] = []

    for (const a of content) {
        if (typeof a === "string") {
            nodes.push(document.createTextNode(a));
            continue;
        }
        nodes.push(a)
    }

    return nodes;
}

function PathTo(Elements: Node[], index: number) {
    const ElChilds: Node[] = [];
    Elements[index]
        .childNodes.forEach((v) => {
            ElChilds.push(v)
        })
    return ElChilds;
}

function Sync(OldElements: Node[], NewElements: Node[], Address: number[]) {

    var oldEl = OldElements;
    var newEl = NewElements;

    for (const a of Address) {
        console.log(oldEl[1], newEl[1], newEl[0].isEqualNode(oldEl[0]))

        oldEl = PathTo(oldEl, a);
        newEl = PathTo(newEl, a);

        console.log(oldEl, newEl, oldEl === newEl)
    }
}

var A = ElementStringToNodes(a)
var B = ElementStringToNodes(b)

Sync(A, B, [0])

class XtifyClass {
    private _previousRender: HTMLElement[] = [];
    private _renderFunction: () => HTMLElement[] = () => [];
    private _target = document.body;
    private _styleNode = document.createElement("style");
    private _css_includes: string[] = [];

    constructor() { }

    init(callback: () => HTMLElement[]) {
        this._renderFunction = callback;
        document.head.appendChild(this._styleNode);

        setInterval(() => {
            this.update();
        }, 1000);
    }

    initAt(target: HTMLElement, callback: () => HTMLElement[]) {
        this._target = target;
        this.init(callback);
    }

    update() {
        const cssImports = this._css_includes
            .map((v) => { return `@import url('${v.replace(".js", ".css").replace(".ts", ".css")}');` })
            .join("\n");

        if (this._styleNode.innerHTML !== cssImports) {
            this._styleNode.innerHTML = cssImports;
        }

        const currentRender = this._renderFunction();

        currentRender.forEach((v, i) => {
            this.compare(v, i)
        })
    }

    private compare(el: HTMLElement, i: number) {
        this._previousRender[i]

        return
    }

    includeCSS(importMeta: ImportMeta) {
        this._css_includes.push(importMeta.url);
    }
}