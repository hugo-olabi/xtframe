import { apply, applyProps } from "./utils/funcs"
import { createElement } from "./utils/html"
import { NodeProps, ElementOrString, XtifyHTMLElements, GenericProps, ElementGeneric } from "./htmlT";

const XtifyHTML: { [key: string]: (props: any) => ElementGeneric } = {
    'var_': (...content: (NodeProps | ElementOrString)[]) => facClosed("var", content),
    'stop_': (...content: (NodeProps | ElementOrString)[]) => facClosedSVGNS("stop", content),
};
const tags = [
    'area', 'base', 'br', 'col', 'command', 'hr', 'img', 'input', 'keygen', 'link', 'meta', 'param', 'source',
    //SVG

];
const tagsSVG = [
    "circle", "rect", "path", "line", "polygon", "polyline", "use", "image",
    "stop", "feGaussianBlur", "feOffset", "feMergeNode", "feFlood", "feTile",
    "feMorphology", "feColorMatrix", "feTurbulence", "feComposite", "feBlend",
    "feDiffuseLighting", "feDisplacementMap", "feSpecularLighting",
    "feConvolveMatrix", "feDistantLight", "fePointLight", "feSpotLight"
]

const containerTags = [
    'a', 'abbr', 'address', 'article', 'aside', 'audio', 'b', 'bdi', 'bdo', 'blockquote', 'body', 'button',
    'canvas', 'caption', 'cite', 'code', 'colgroup', 'data', 'datalist', 'dd', 'del', 'details', 'dfn',
    'dialog', 'div', 'dl',
    'dt', 'em', 'embed', 'fieldset', 'figcaption', 'figure', 'footer', 'form',
    'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'head', 'header', 'hgroup', 'html', 'i', 'iframe', 'ins', 'kbd',
    'label', 'legend', 'li', 'main', 'map', 'mark', 'menu', 'meter', 'nav', 'noscript', 'object', 'ol',
    'optgroup', 'option', 'output',
    'p', 'picture', 'pre', 'progress', 'q', 'rp', 'rt', 'ruby', 's',
    'samp', 'script', 'section', 'select', 'small', 'span', 'strong', 'style', 'sub', 'summary', 'sup',
    'table', 'tbody', 'td', 'template', 'textarea', 'tfoot', 'th', 'thead', 'time', 'title', 'tr', 'track',
    'u', 'ul', /*'var_',*/ 'video', 'wbr',
    //SVG

];

const containerTagsSVG = [
    "svg", "g", "circle", "rect", "path", "line", "polygon", "polyline",
    "text", "tspan", "use", "defs", "marker", "pattern", "linearGradient",
    "radialGradient", "clipPath", "mask", "symbol", "filter",
    "feComponentTransfer", "feMerge", "feFuncR", "feFuncG", "feFuncB", "feFuncA"
]



function facClosed(tag: string, props: GenericProps[]) {
    const e = createElement(tag);
    apply(e, props);
    return e;
}

function facTag(tag: string, props?: NodeProps) {
    const e = createElement(tag);
    if (props) {
        applyProps(e, props);
    }
    return e;
}

function facClosedSVG(tag: string, props: GenericProps[]) {
    const e = document.createElementNS(window.xtify.svgNamespace, tag);
    apply(e, props, true);
    return e;
}

function facClosedSVGNS(tag: string, props: GenericProps[]) {
    const e = document.createElementNS(window.xtify.svgNamespace, tag);
    apply(e, props, false);
    return e;
}

function facTagSVG(tag: string, props?: NodeProps) {
    const e = document.createElementNS(window.xtify.svgNamespace, tag);
    if (props) {
        applyProps(e, props, true);
    }
    return e;
}

for (const closedTag of containerTags) {
    XtifyHTML[closedTag] = (...content: (NodeProps | ElementOrString)[]) => facClosed(closedTag, content);
}

for (const tag of tags) {
    XtifyHTML[tag] = (props?: NodeProps) => facTag(tag, props);
}

for (const closedTag of containerTagsSVG) {
    XtifyHTML[closedTag] = (...content: (NodeProps | ElementOrString)[]) => facClosedSVG(closedTag, content);
}

for (const tag of tagsSVG) {
    XtifyHTML[tag] = (props?: NodeProps) => facTagSVG(tag, props);
}

export default XtifyHTML as unknown as XtifyHTMLElements;