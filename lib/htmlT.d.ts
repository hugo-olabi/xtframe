export type ElementGeneric = HTMLElement | Element | SVGElement
export type ElementOrString = string | ElementGeneric;
export type SVGElementOrString = ElementOrString;
export type nodeDataType = ElementGeneric[] | {}[];
export type GenericProps = NodeProps | ElementOrString;
export type StringFunc = string | Function;

export interface XtifyHTMLElements {
    a: a;
    abbr: abbr;
    address: address;
    area: area;
    article: article;
    aside: aside;
    audio: audio;
    b: b;
    base: base;
    bdi: bdi;
    bdo: bdo;
    blockquote: blockquote;
    body: body;
    br: br;
    button: button;
    canvas: canvas;
    caption: caption;
    cite: cite;
    code: code;
    col: col;
    colgroup: colgroup;
    data: data;
    datalist: datalist;
    dd: dd;
    del: del;
    details: details;
    dfn: dfn;
    dialog: dialog;
    div: div;
    dl: dl;
    dt: dt;
    em: em;
    embed: embed;
    fieldset: fieldset;
    figcaption: figcaption;
    figure: figure;
    footer: footer;
    form: form;
    h1: h1;
    h2: h2;
    h3: h3;
    h4: h4;
    h5: h5;
    h6: h6;
    head: head;
    header: header;
    hgroup: hgroup;
    hr: hr;
    html: html;
    i: i;
    iframe: iframe;
    img: img;
    input: input;
    ins: ins;
    kbd: kbd;
    keygen: keygen;
    label: label;
    legend: legend;
    li: li;
    link: link;
    main: main;
    map: map;
    mark: mark;
    menu: menu;
    meta: meta;
    meter: meter;
    nav: nav;
    noscript: noscript;
    object: object;
    ol: ol;
    optgroup: optgroup;
    option: option;
    output: output;
    p: p;
    param: param;
    picture: picture;
    pre: pre;
    progress: progress;
    q: q;
    rp: rp;
    rt: rt;
    ruby: ruby;
    s: s;
    samp: samp;
    script: script;
    section: section;
    select: select;
    small: small;
    source: source;
    span: span;
    strong: strong;
    style: style;
    sub: sub;
    summary: summary;
    sup: sup;
    table: table;
    tbody: tbody;
    td: td;
    template: template;
    textarea: textarea;
    tfoot: tfoot;
    th: th;
    thead: thead;
    time: time;
    title: title;
    tr: tr;
    track: track;
    u: u;
    ul: ul;
    var_: var_;
    video: video;
    wbr: wbr;
    //SVG
    svg: svg;
    g: g;
    circle: circle;
    rect: rect;
    path: path;
    line: line;
    stop_: stop_;
    polygon: polygon;
    polyline: polyline;
    text: text;
    tspan: tspan;
    use: use;
    defs: defs;
    marker: marker;
    pattern: pattern;
    linearGradient: linearGradient;
    radialGradient: radialGradient;
    clipPath: clipPath;
    mask: mask;
    symbol: symbol_;
    filter: filter;
    feComponentTransfer: feComponentTransfer;
    feMerge: feMerge;
    feFuncR: feFuncR;
    feFuncG: feFuncG;
    feFuncB: feFuncB;
    feFuncA: feFuncA;
    feGaussianBlur: feGaussianBlur;
    feOffset: feOffset;
    feMergeNode: feMergeNode;
    feFlood: feFlood;
    feTile: feTile;
    feMorphology: feMorphology;
    feColorMatrix: feColorMatrix;
    feTurbulence: feTurbulence;
    feComposite: feComposite;
    feBlend: feBlend;
    feDiffuseLighting: feDiffuseLighting;
    feDisplacementMap: feDisplacementMap;
    feSpecularLighting: feSpecularLighting;
    feConvolveMatrix: feConvolveMatrix;
    feDistantLight: feDistantLight;
    fePointLight: fePointLight;
    feSpotLight: feSpotLight;
}

export interface a {
    (props?: anchorProps, ...content: ElementOrString[]): HTMLAnchorElement;
    (...content: ElementOrString[]): HTMLAnchorElement;
};

export interface abbr {
    (props: abbrProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface address {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface area {
    (props?: areaProps): HTMLAreaElement;
};

export interface article {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface aside {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface audio {
    (props?: audioProps, ...content: ElementOrString[]): HTMLAudioElement;
    (...content: ElementOrString[]): HTMLAudioElement;
};

export interface b {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface base {
    (props?: baseProps): HTMLBaseElement;
};

export interface bdi {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface bdo {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface blockquote {
    (props?: blockquoteProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface body {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface br {
    (props?: GenericProps): HTMLBRElement;
};

export interface button {
    (props?: buttonProps, ...content: ElementOrString[]): HTMLButtonElement;
    (...content: ElementOrString[]): HTMLButtonElement;
};

export interface canvas {
    (props?: canvasProps, ...content: ElementOrString[]): HTMLCanvasElement;
    (...content: ElementOrString[]): HTMLCanvasElement;
};

export interface caption {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface cite {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface code {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface col {
    (props?: colProps): HTMLTableColElement;
};

export interface colgroup {
    (props?: colgroupProps): HTMLTableColElement;
};

export interface data {
    (props?: dataProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface datalist {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface dd {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};


export interface del {
    (props?: delProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface details {
    (props?: detailsProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface dfn {
    (props?: dfnProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface dialog {
    (props?: dialogProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface div {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLDivElement;
    (...content: ElementOrString[]): HTMLDivElement;
};

export interface dl {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface dt {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface em {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface embed {
    (props?: embedProps): HTMLElement;
};

export interface fieldset {
    (props?: fieldsetProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface figcaption {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface figure {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface footer {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface form {
    (props?: formProps, ...content: ElementOrString[]): HTMLFormElement;
    (...content: ElementOrString[]): HTMLFormElement;
};

export interface h1 {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface h2 {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface h3 {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface h4 {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface h5 {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface h6 {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface head {
    (props?: headProps): HTMLElement;
};

export interface header {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface hgroup {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface hr {
    (props?: hrProps): HTMLHRElement;
};

export interface html {
    (props?: htmlProps): HTMLHtmlElement;
};

export interface i {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface iframe {
    (props?: iframeProps, ...content: ElementOrString[]): HTMLIFrameElement;
    (...content: ElementOrString[]): HTMLIFrameElement;
};

export interface img {
    (props?: imgProps): HTMLImageElement;
};

export interface input {
    (props?: inputProps): HTMLInputElement;
};

export interface ins {
    (props?: insProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface kbd {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface keygen {
    (props?: keygenProps): HTMLElement;
};

export interface label {
    (props?: labelProps, ...content: ElementOrString[]): HTMLLabelElement;
    (...content: ElementOrString[]): HTMLLabelElement;
};

export interface legend {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface li {
    (props?: liProps, ...content: ElementOrString[]): HTMLLIElement;
    (...content: ElementOrString[]): HTMLLIElement;
};

export interface link {
    (props?: linkProps): HTMLLinkElement;
};

export interface main {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface map {
    (props?: mapProps): HTMLMapElement;
};

export interface mark {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface menu {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface meta {
    (props?: metaProps): HTMLMetaElement;
};

export interface meter {
    (props?: meterProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface nav {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface noscript {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface object {
    (props?: objectProps): HTMLElement;
};

export interface ol {
    (props?: olProps, ...content: ElementOrString[]): HTMLOListElement;
    (...content: ElementOrString[]): HTMLOListElement;
};

export interface optgroup {
    (props?: optgroupProps): HTMLOptGroupElement;
};

export interface option {
    (props?: optionProps): HTMLOptionElement;
};

export interface output {
    (props?: outputProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface p {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLParagraphElement;
    (...content: ElementOrString[]): HTMLParagraphElement;
};

export interface param {
    (props?: paramProps): HTMLParamElement;
};

export interface picture {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface pre {
    (props?: preProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface progress {
    (props?: progressProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface q {
    (props?: qProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface rp {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface rt {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface ruby {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface s {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface samp {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface script {
    (props?: scriptProps): HTMLScriptElement;
};

export interface section {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface select {
    (props?: selectProps, ...content: ElementOrString[]): HTMLSelectElement;
    (...content: ElementOrString[]): HTMLSelectElement;
};

export interface small {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface source {
    (props?: sourceProps): HTMLSourceElement;
};

export interface span {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface strong {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface style {
    (props?: styleProps): HTMLStyleElement;
};

export interface sub {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface summary {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface sup {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface table {
    (props?: tableProps, ...content: ElementOrString[]): HTMLTableElement;
    (...content: ElementOrString[]): HTMLTableElement;
};

export interface tbody {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface td {
    (props?: tdProps, ...content: ElementOrString[]): HTMLTableDataCellElement;
    (...content: ElementOrString[]): HTMLTableDataCellElement;
};

export interface template {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLTemplateElement;
    (...content: ElementOrString[]): HTMLTemplateElement;
};

export interface textarea {
    (props?: textareaProps, ...content: ElementOrString[]): HTMLTextAreaElement;
    (...content: ElementOrString[]): HTMLTextAreaElement;
};

export interface tfoot {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface th {
    (props?: thProps, ...content: ElementOrString[]): HTMLTableHeaderCellElement;
    (...content: ElementOrString[]): HTMLTableHeaderCellElement;
};

export interface thead {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface time {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface title {
    (props?: GenericProps): HTMLElement;
};

export interface tr {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLTableRowElement;
    (...content: ElementOrString[]): HTMLTableRowElement;
};

export interface track {
    (props?: trackProps): HTMLTrackElement;
};

export interface u {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface ul {
    (props?: ulProps, ...content: ElementOrString[]): HTMLUListElement;
    (...content: ElementOrString[]): HTMLUListElement;
};

export interface var_ {
    (props?: GenericProps, ...content: ElementOrString[]): HTMLElement;
    (...content: ElementOrString[]): HTMLElement;
};

export interface video {
    (props?: videoProps, ...content: ElementOrString[]): HTMLVideoElement;
    (...content: ElementOrString[]): HTMLVideoElement;
};

export interface wbr {
    (props?: GenericProps): HTMLElement;
};

//SVG
export interface svg {
    (props?: svgProps, ...content: SVGElementOrString[]): SVGElement;
    (...content: SVGElementOrString[]): SVGElement;
}

export interface g {
    (props?: svgProps, ...content: SVGElementOrString[]): SVGElement;
    (...content: SVGElementOrString[]): SVGElement;
}

export interface circle {
    (props?: circleProps): SVGCircleElement;
}

export interface rect {
    (props?: rectProps): SVGRectElement;
}

export interface path {
    (props?: pathProps): SVGPathElement;
}

export interface line {
    (props?: lineProps): SVGLineElement;
}

export interface polygon {
    (props?: polygonProps): SVGPolygonElement;
}

export interface polyline {
    (props?: polylineProps): SVGPolylineElement;
}

export interface text {
    (props?: textProps, ...content: SVGElementOrString[]): SVGTextElement;
    (...content: SVGElementOrString[]): SVGTextElement;
}

export interface tspan {
    (props?: tspanProps, ...content: SVGElementOrString[]): SVGTSpanElement;
    (...content: SVGElementOrString[]): SVGTSpanElement;
}

export interface use {
    (props?: useProps): SVGUseElement;
}

export interface defs {
    (props?: svgProps, ...content: SVGElementOrString[]): SVGDefsElement;
    (...content: SVGElementOrString[]): SVGDefsElement;
}

export interface marker {
    (props?: markerProps, ...content: SVGElementOrString[]): SVGMarkerElement;
    (...content: SVGElementOrString[]): SVGMarkerElement;
}

export interface pattern {
    (props?: patternProps, ...content: SVGElementOrString[]): SVGPatternElement;
    (...content: SVGElementOrString[]): SVGPatternElement;
}

export interface linearGradient {
    (props?: linearGradientProps, ...content: SVGElementOrString[]): SVGLinearGradientElement;
    (...content: SVGElementOrString[]): SVGLinearGradientElement;
}

export interface radialGradient {
    (props?: radialGradientProps, ...content: SVGElementOrString[]): SVGRadialGradientElement;
    (...content: SVGElementOrString[]): SVGRadialGradientElement;
}

export interface stop_ {
    (props?: stopProps): SVGStopElement;
}

export interface clipPath {
    (props?: clipPathProps, ...content: SVGElementOrString[]): SVGClipPathElement;
    (...content: SVGElementOrString[]): SVGClipPathElement;
}

export interface mask {
    (props?: maskProps, ...content: SVGElementOrString[]): SVGMaskElement;
    (...content: SVGElementOrString[]): SVGMaskElement;
}

export interface symbol_ {
    (props?: symbolProps, ...content: SVGElementOrString[]): SVGSymbolElement;
    (...content: SVGElementOrString[]): SVGSymbolElement;
}

export interface filter {
    (props?: filterProps, ...content: SVGElementOrString[]): SVGFilterElement;
    (...content: SVGElementOrString[]): SVGFilterElement;
}

export interface feComponentTransfer {
    (props?: feComponentTransferProps, ...content: SVGElementOrString[]): SVGFEComponentTransferElement;
    (...content: SVGElementOrString[]): SVGFEComponentTransferElement;
}

export interface feMerge {
    (props?: feMergeProps, ...content: SVGElementOrString[]): SVGFEMergeElement;
    (...content: SVGElementOrString[]): SVGFEMergeElement;
}

export interface feFuncR {
    (props?: feFuncRProps): SVGFEFuncRElement;
}

export interface feFuncG {
    (props?: feFuncGProps): SVGFEFuncGElement;
}

export interface feFuncB {
    (props?: feFuncBProps): SVGFEFuncBElement;
}

export interface feFuncA {
    (props?: feFuncAProps): SVGFEFuncAElement;
}

export interface feGaussianBlur {
    (props?: feGaussianBlurProps): SVGFEGaussianBlurElement;
}

export interface feOffset {
    (props?: feOffsetProps): SVGFEOffsetElement;
}

export interface feMergeNode {
    (props?: feMergeNodeProps): SVGFEMergeNodeElement;
}

export interface feFlood {
    (props?: feBlendProps): SVGFEFloodElement;
}

export interface feTile {
    (props?: feTileProps): SVGFETileElement;
}

export interface feMorphology {
    (props?: feMorphologyProps): SVGFEMorphologyElement;
}

export interface feColorMatrix {
    (props?: feColorMatrixProps): SVGFEColorMatrixElement;
}

export interface feTurbulence {
    (props?: feTurbulenceProps): SVGFETurbulenceElement;
}

export interface feComposite {
    (props?: feCompositeProps): SVGFECompositeElement;
}

export interface feBlend {
    (props?: feBlendProps): SVGFEBlendElement;
}

export interface feDiffuseLighting {
    (props?: feDiffuseLightingProps): SVGFEDiffuseLightingElement;
}

export interface feDisplacementMap {
    (props?: feDisplacementMapProps): SVGFEDisplacementMapElement;
}

export interface feSpecularLighting {
    (props?: feSpecularLightingProps): SVGFESpecularLightingElement;
}

export interface feConvolveMatrix {
    (props?: feConvolveMatrixProps): SVGFEConvolveMatrixElement;
}

export interface feDistantLight {
    (props?: feDistantLightProps): SVGFEDistantLightElement;
}

export interface fePointLight {
    (props?: fePointLightProps): SVGFEPointLightElement;
}

export interface feSpotLight {
    (props?: feSpotLightProps): SVGFESpotLightElement;
}

export interface NodeProps {
    about?: string; acceptCharset?: string; accessKey?: string; allowFullScreen?: string; allowTransparency?: string; autocapitalize?: "none" | "off" | "on" | "sentences" | "words" | "characters";
    autocomplete?: "off" | "on" | "name" | "honorific-prefix" | "given-name" | "additional-name" | "family-name" | "honorific-suffix" | "nickname" | "email" | "username" | "new-password" | "current-password" | "one";
    autoFocus?: string; autoPlay?: string; capture?: string; cellPadding?: string; cellSpacing?: string; charSet?: string; classID?: string; class?: string; colSpan?: string; contenteditable?: string | boolean; contextMenu?: string; crossOrigin?: string; dangerouslySetInnerHTML?: string; datatype?: string; dateTime?: string; dir?: string; draggable?: string; encType?: string; formAction?: string; formEncType?: string; formMethod?: string; formNoValidate?: string; formTarget?: string; frameBorder?: string; hidden?: string; hrefLang?: string; htmlFor?: string; httpEquiv?: string; icon?: string; id?: string; inlist?: string; inputMode?: string; is?: string; itemID?: string; itemProp?: string; itemRef?: string; itemScope?: string; itemType?: string; keyParams?: string; keyType?: string; lang?: string; marginHeight?: string; marginWidth?: string; maxLength?: string; mediaGroup?: string; minLength?: string; noValidate?: string; onBlur?: string; onFocus?: string; onKeyDown?: string; onKeyPress?: string; onKeyUp?: string; prefix?: string; property?: string; radioGroup?: string; readOnly?: string; resource?: string; role?: string; rowSpan?: string; scoped?: string; seamless?: string; security?: string; spellCheck?: string; srcDoc?: string; srcLang?: string; srcSet?: string; style?: string | StyleElement; suppressContentEditableWarning?: string; tabIndex?: string; title?: string; typeof?: string; unselectable?: string; useMap?: string; vocab?: string; wmode?: string;
    onabort?: StringFunc;
    onblur?: StringFunc;
    oncanplay?: StringFunc;
    oncanplaythrough?: StringFunc
    onchange?: StringFunc;
    oncontextmenu?: StringFunc;
    onclick?: StringFunc;
    ondblclick?: StringFunc;
    ondrag?: StringFunc;
    ondragend?: StringFunc;
    ondragenter?: StringFunc;
    ondragleave?: StringFunc;
    ondragover?: StringFunc;
    ondragstart?: StringFunc;
    ondrop?: StringFunc;
    ondurationchange?: StringFunc;
    onemptied?: StringFunc;
    onended?: StringFunc;
    onerror?: StringFunc;
    onfocus?: StringFunc;
    onformchange?: StringFunc;
    onforminput?: StringFunc;
    onhover?: StringFunc;
    oninput?: StringFunc;
    oninvalid?: StringFunc;
    onkeydown?: StringFunc;
    onkeypress?: StringFunc;
    onkeyup?: StringFunc;
    onload?: StringFunc;
    onloadeddata?: StringFunc;
    onloadedmetadata?: StringFunc;
    onloadstart?: StringFunc;
    onmousedown?: StringFunc;
    onmouseenter?: StringFunc;
    onmousemove?: StringFunc;
    onmouseout?: StringFunc;
    onmouseover?: StringFunc;
    onmouseup?: StringFunc;
    onmousewheel?: StringFunc;
    onpause?: StringFunc;
    onplay?: StringFunc;
    onplaying?: StringFunc;
    onpointercancel?: StringFunc;
    onpointerdown?: StringFunc;
    onpointerenter?: StringFunc;
    onpointerleave?: StringFunc;
    onpointerlockchange?: StringFunc;
    onpointerlockerror?: StringFunc;
    onpointermove?: StringFunc;
    onpointerout?: StringFunc;
    onpointerover?: StringFunc;
    onpointerup?: StringFunc;
    onprogress?: StringFunc;
    onratechange?: StringFunc;
    onreadystatechange?: StringFunc;
    onreset?: StringFunc;
    onresize?: StringFunc;
    onscroll?: StringFunc;
    onseeked?: StringFunc;
    onseeking?: StringFunc;
    onselect?: StringFunc;
    onshow?: StringFunc;
    onstalled?: StringFunc;
    onsubmit?: StringFunc;
    onsuspend?: StringFunc;
    ontimeupdate?: StringFunc;
    onvolumechange?: StringFunc;
    onwaiting?: StringFunc;

    [K: string]: any;
}

export interface anchorProps extends NodeProps {
    coords?: string;
    download?: string;
    href?: string;
    name?: string;
    rel?: string;
    shape?: string;
    target?: string;
    type?: string;
};

export interface abbrProps extends NodeProps {
    title?: string;
};

export interface appletProps extends NodeProps {
    alt?: string;
    height?: string;
    name?: string;
    width?: string;
};

export interface areaProps extends NodeProps {
    alt?: string;
    coords?: string;
    download?: string;
    href?: string;
    rel?: string;
    shape?: string;
    target?: string;
    type?: string;
};

export interface audioProps extends NodeProps {
    controls?: string;
    loop?: string;
    muted?: string;
    preload?: string;
    src?: string;
};

export interface baseProps extends NodeProps {
    href?: string;
    target?: string;
};

export interface basefontProps extends NodeProps {
    size?: string;
};

export interface bdoProps extends NodeProps {
    dir?: string;
};

export interface blockquoteProps extends NodeProps {
    cite?: string;
};

export interface buttonProps extends NodeProps {
    disabled?: string;
    form?: string;
    name?: string;
    type?: string;
    value?: string;
};

export interface canvasProps extends NodeProps {
    height?: string;
    width?: string;
};

export interface colProps extends NodeProps {
    span?: string;
    width?: string;
};

export interface colgroupProps extends NodeProps {
    span?: string;
    width?: string;
};

export interface dataProps extends NodeProps {
    value?: string;
};

export interface delProps extends NodeProps {
    cite?: string;
};

export interface detailsProps extends NodeProps {
    open?: string;
};

export interface dfnProps extends NodeProps {
    title?: string;
};

export interface dialogProps extends NodeProps {
    open?: string;
};

export interface embedProps extends NodeProps {
    height?: string;
    src?: string;
    type?: string;
    width?: string;
};

export interface fieldsetProps extends NodeProps {
    disabled?: string;
    form?: string;
    name?: string;
};

export interface fontProps extends NodeProps {
    size?: string;
};

export interface formProps extends NodeProps {
    accept?: string;
    action?: string;
    method?: string;
    name?: string;
    target?: string;
};

export interface frameProps extends NodeProps {
    name?: string;
    scrolling?: string;
    src?: string;
};

export interface framesetProps extends NodeProps {
    cols?: string;
    rows?: string;
};

export interface headProps extends NodeProps {
    profile?: string;
};

export interface hrProps extends NodeProps {
    size?: string;
    width?: string;
};

export interface htmlProps extends NodeProps {
    manifest?: string;
};

export interface iframeProps extends NodeProps {
    height?: string;
    name?: string;
    sandbox?: string;
    scrolling?: string;
    src?: string;
    width?: string;
};

export interface imgProps extends NodeProps {
    alt?: string;
    height?: string;
    name?: string;
    sizes?: string;
    src?: string;
    width?: string;
};

export interface inputProps extends NodeProps {
    accept?: string;
    alt?: string;
    autoCapitalize?: string;
    autoCorrect?: string;
    autoSave?: string;
    checked?: string;
    defaultChecked?: string;
    defaultValue?: string;
    disabled?: string;
    form?: string;
    height?: string;
    list?: string;
    max?: string | number;
    min?: string | number;
    multiple?: string;
    name?: string;
    onChange?: string;
    pattern?: string;
    placeholder?: string;
    required?: string;
    results?: string;
    size?: string;
    src?: string;
    step?: string | number;
    title?: string;
    type?: string;
    value?: string;
    width?: string;
};

export interface insProps extends NodeProps {
    cite?: string;
};

export interface keygenProps extends NodeProps {
    challenge?: string;
    disabled?: string;
    form?: string;
    name?: string;
};

export interface labelProps extends NodeProps {
    form?: string;
};

export interface liProps extends NodeProps {
    type?: string;
    value?: string;
};

export interface linkProps extends NodeProps {
    color?: string;
    href?: string;
    integrity?: string;
    media?: string;
    nonce?: string;
    rel?: string;
    scope?: string;
    sizes?: string;
    target?: string;
    title?: string;
    type?: string;
};

export interface mapProps extends NodeProps {
    name?: string;
};

export interface metaProps extends NodeProps {
    content?: string;
    name?: string;
};

export interface meterProps extends NodeProps {
    high?: string;
    low?: string;
    max?: string;
    min?: string;
    optimum?: string;
    value?: string;
};

export interface objectProps extends NodeProps {
    data?: string;
    form?: string;
    height?: string;
    name?: string;
    type?: string;
    width?: string;
};

export interface olProps extends NodeProps {
    reversed?: string;
    start?: string;
    type?: string;
};

export interface optgroupProps extends NodeProps {
    disabled?: string;
    label?: string;
};

export interface optionProps extends NodeProps {
    disabled?: string;
    label?: string;
    selected?: string;
    value?: string;
};

export interface outputProps extends NodeProps {
    form?: string;
    name?: string;
};

export interface paramProps extends NodeProps {
    name?: string;
    type?: string;
    value?: string;
};

export interface preProps extends NodeProps {
    width?: string;
};

export interface progressProps extends NodeProps {
    max?: string;
    value?: string;
};

export interface qProps extends NodeProps {
    cite?: string;
};

export interface scriptProps extends NodeProps {
    async?: string;
    defer?: string;
    integrity?: string;
    nonce?: string;
    src?: string;
    type?: string;
};

export interface selectProps extends NodeProps {
    defaultValue?: string;
    disabled?: string;
    form?: string;
    multiple?: string;
    name?: string;
    onChange?: string;
    required?: string;
    size?: string;
    value?: string;
};

export interface slotProps extends NodeProps {
    name?: string;
};

export interface sourceProps extends NodeProps {
    media?: string;
    sizes?: string;
    src?: string;
    type?: string;
};

export interface styleProps extends NodeProps {
    media?: string;
    nonce?: string;
    title?: string;
    type?: string;
};

export interface tableProps extends NodeProps {
    summary?: string;
    width?: string;
};

export interface tdProps extends NodeProps {
    headers?: string;
    height?: string;
    scope?: string;
    width?: string;
};

export interface textareaProps extends NodeProps {
    autoCapitalize?: string;
    autoCorrect?: string;
    cols?: string;
    defaultValue?: string;
    disabled?: string;
    form?: string;
    name?: string;
    placeholder?: string;
    required?: string;
    rows?: string;
    value?: string;
    wrap?: string;
};

export interface thProps extends NodeProps {
    headers?: string;
    height?: string;
    scope?: string;
    width?: string;
};

export interface trackProps extends NodeProps {
    default?: string;
    kind?: string;
    label?: string;
    src?: string;
};

export interface ulProps extends NodeProps {
    type?: string;
};

export interface videoProps extends NodeProps {
    controls?: string;
    height?: string;
    loop?: string;
    muted?: string;
    playsInline?: string;
    poster?: string;
    preload?: string;
    src?: string;
    width?: string;
};

export interface svgProps extends NodeProps {
    accentHeight?: string;
    accumulate?: string;
    additive?: string;
    alignmentBaseline?: string;
    allowReorder?: string;
    alphabetic?: string;
    amplitude?: string;
    arabicForm?: string;
    ascent?: string;
    attributeName?: string;
    attributeType?: string;
    autoReverse?: string;
    azimuth?: string;
    baseFrequency?: string;
    baseProfile?: string;
    baselineShift?: string;
    bbox?: string;
    begin?: string;
    bias?: string;
    by?: string;
    calcMode?: string;
    capHeight?: string;
    clip?: string;
    clipPath?: string;
    clipPathUnits?: string;
    clipRule?: string;
    color?: string;
    colorInterpolation?: string;
    colorInterpolationFilters?: string;
    colorProfile?: string;
    colorRendering?: string;
    contentScriptType?: string;
    contentStyleType?: string;
    cursor?: string;
    cx?: string;
    cy?: string;
    d?: string;
    decelerate?: string;
    descent?: string;
    diffuseConstant?: string;
    direction?: string;
    display?: string;
    divisor?: string;
    dominantBaseline?: string;
    dur?: string;
    dx?: string;
    dy?: string;
    edgeMode?: string;
    elevation?: string;
    enableBackground?: string;
    end?: string;
    exponent?: string;
    externalResourcesRequired?: string;
    fill?: string;
    fillOpacity?: string;
    fillRule?: string;
    filter?: string;
    filterRes?: string;
    filterUnits?: string;
    floodColor?: string;
    floodOpacity?: string;
    focusable?: string;
    fontFamily?: string;
    fontSize?: string;
    fontSizeAdjust?: string;
    fontStretch?: string;
    fontStyle?: string;
    fontVariant?: string;
    fontWeight?: string;
    format?: string;
    from?: string;
    fx?: string;
    fy?: string;
    g1?: string;
    g2?: string;
    glyphName?: string;
    glyphOrientationHorizontal?: string;
    glyphOrientationVertical?: string;
    glyphRef?: string;
    gradientTransform?: string;
    gradientUnits?: string;
    hanging?: string;
    height?: string;
    horizAdvX?: string;
    horizOriginX?: string;
    ideographic?: string;
    imageRendering?: string;
    in?: string;
    in2?: string;
    intercept?: string;
    k?: string;
    k1?: string;
    k2?: string;
    k3?: string;
    k4?: string;
    kernelMatrix?: string;
    kernelUnitLength?: string;
    kerning?: string;
    keyPoints?: string;
    keySplines?: string;
    keyTimes?: string;
    lengthAdjust?: string;
    letterSpacing?: string;
    lightingColor?: string;
    limitingConeAngle?: string;
    local?: string;
    markerEnd?: string;
    markerHeight?: string;
    markerMid?: string;
    markerStart?: string;
    markerUnits?: string;
    markerWidth?: string;
    mask?: string;
    maskContentUnits?: string;
    maskUnits?: string;
    mathematical?: string;
    mode?: string;
    numOctaves?: string;
    offset?: string;
    opacity?: string;
    operator?: string;
    order?: string;
    orient?: string;
    orientation?: string;
    origin?: string;
    overflow?: string;
    overlinePosition?: string;
    overlineThickness?: string;
    paintOrder?: string;
    panose1?: string;
    pathLength?: string;
    patternContentUnits?: string;
    patternTransform?: string;
    patternUnits?: string;
    pointerEvents?: string;
    points?: string;
    pointsAtX?: string;
    pointsAtY?: string;
    pointsAtZ?: string;
    preserveAlpha?: string;
    preserveAspectRatio?: string;
    primitiveUnits?: string;
    r?: string;
    radius?: string;
    refX?: string;
    refY?: string;
    renderingIntent?: string;
    repeatCount?: string;
    repeatDur?: string;
    requiredExtensions?: string;
    requiredFeatures?: string;
    restart?: string;
    result?: string;
    rotate?: string;
    rx?: string;
    ry?: string;
    scale?: string;
    seed?: string;
    shapeRendering?: string;
    slope?: string;
    spacing?: string;
    specularConstant?: string;
    specularExponent?: string;
    speed?: string;
    spreadMethod?: string;
    startOffset?: string;
    stdDeviation?: string;
    stemh?: string;
    stemv?: string;
    stitchTiles?: string;
    stopColor?: string;
    stopOpacity?: string;
    strikethroughPosition?: string;
    strikethroughThickness?: string;
    string?: string;
    stroke?: string;
    strokeDasharray?: string;
    strokeDashoffset?: string;
    strokeLinecap?: string;
    strokeLinejoin?: string;
    strokeMiterlimit?: string;
    strokeOpacity?: string;
    strokeWidth?: string;
    surfaceScale?: string;
    systemLanguage?: string;
    tableValues?: string;
    targetX?: string;
    targetY?: string;
    textAnchor?: string;
    textDecoration?: string;
    textLength?: string;
    textRendering?: string;
    to?: string;
    transform?: string;
    u1?: string;
    u2?: string;
    underlinePosition?: string;
    underlineThickness?: string;
    unicode?: string;
    unicodeBidi?: string;
    unicodeRange?: string;
    unitsPerEm?: string;
    vAlphabetic?: string;
    vHanging?: string;
    vIdeographic?: string;
    vMathematical?: string;
    values?: string;
    vectorEffect?: string;
    version?: string;
    vertAdvY?: string;
    vertOriginX?: string;
    vertOriginY?: string;
    viewBox?: string;
    viewTarget?: string;
    visibility?: string;
    width?: string | number;
    widths?: string;
    wordSpacing?: string;
    writingMode?: string;
    x?: string;
    x1?: string;
    x2?: string;
    xChannelSelector?: string;
    xHeight?: string;
    xlinkActuate?: string;
    xlinkArcrole?: string;
    xlinkHref?: string;
    xlinkRole?: string;
    xlinkShow?: string;
    xlinkTitle?: string;
    xlinkType?: string;
    xmlBase?: string;
    xmlLang?: string;
    xmlSpace?: string;
    xmlns?: string;
    xmlnsXlink?: string;
    y?: string;
    y1?: string;
    y2?: string;
    yChannelSelector?: string;
    z?: string;
    zoomAndPan?: string;
}

export interface elementsProps extends NodeProps {
    html?: string;
    svg?: string;
}

export interface circleProps extends svgProps {
    cx?: string | number;
    cy?: string | number;
    r?: string | number;
}

export interface rectProps extends svgProps {
    x?: string | number;
    y?: string | number;
    width?: string | number;
    height?: string | number;
    rx?: string | number;
    ry?: string | number;
}

export interface pathProps extends svgProps {
    d?: string;
}

export interface lineProps extends svgProps {
    x1?: string | number;
    y1?: string | number;
    x2?: string | number;
    y2?: string | number;
}

export interface polygonProps extends svgProps {
    points?: string;
}

export interface polylineProps extends svgProps {
    points?: string;
}

export interface textProps extends svgProps {
    x?: string | number;
    y?: string | number;
    dx?: string | number;
    dy?: string | number;
    rotate?: string;
    textAnchor?: string;
    dominantBaseline?: string;
    fontSize?: string | number;
    fontFamily?: string;
}

export interface tspanProps extends svgProps {
    x?: string | number;
    y?: string | number;
    dx?: string | number;
    dy?: string | number;
    rotate?: string;
    textAnchor?: string;
    dominantBaseline?: string;
    fontSize?: string | number;
    fontFamily?: string;
}

export interface useProps extends svgProps {
    href?: string;
    x?: string | number;
    y?: string | number;
    width?: string | number;
    height?: string | number;
}

export interface defsProps extends svgProps {

}

export interface markerProps extends svgProps {
    viewBox?: string;
    refX?: string | number;
    refY?: string | number;
    markerUnits?: string;
    markerWidth?: string | number;
    markerHeight?: string | number;
    orient?: string;
}

export interface patternProps extends svgProps {
    patternUnits?: string;
    patternContentUnits?: string;
    patternTransform?: string;
    width?: string | number;
    height?: string | number;
    x?: string | number;
    y?: string | number;
}

export interface linearGradientProps extends svgProps {
    x1?: string | number;
    y1?: string | number;
    x2?: string | number;
    y2?: string | number;
    gradientUnits?: string;
    gradientTransform?: string;
}

export interface radialGradientProps extends svgProps {
    cx?: string | number;
    cy?: string | number;
    r?: string | number;
    fx?: string | number;
    fy?: string | number;
    gradientUnits?: string;
    gradientTransform?: string;
}

export interface stopProps {
    offset: string | number;
    stopColor: string;
    stopOpacity: string | number;
}

export interface clipPathProps extends svgProps {

}

export interface maskProps extends svgProps {
    maskUnits?: string;
    maskContentUnits?: string;
}

export interface symbolProps extends svgProps {
    viewBox?: string;
}

export interface filterProps extends svgProps {
    x?: string | number;
    y?: string | number;
    width?: string | number;
    height?: string | number;
    filterUnits?: string;
    primitiveUnits?: string;
    xlinkHref?: string;
    filterRes?: string;
}

export interface feComponentTransferProps extends svgProps {

}

export interface feMergeProps extends svgProps {

}

export interface feFuncRProps extends svgProps {
    type?: string;
    tableValues?: string;
    slope?: string | number;
    intercept?: string | number;
    amplitude?: string | number;
    exponent?: string | number;
    offset?: string | number;
}

export interface feFuncGProps extends svgProps {
    type?: string;
    tableValues?: string;
    slope?: string | number;
    intercept?: string | number;
    amplitude?: string | number;
    exponent?: string | number;
    offset?: string | number;
}

export interface feFuncBProps extends svgProps {
    type?: string;
    tableValues?: string;
    slope?: string | number;
    intercept?: string | number;
    amplitude?: string | number;
    exponent?: string | number;
    offset?: string | number;
}

export interface feFuncAProps extends svgProps {
    type?: string;
    tableValues?: string;
    slope?: string | number;
    intercept?: string | number;
    amplitude?: string | number;
    exponent?: string | number;
    offset?: string | number;
}

export interface feGaussianBlurProps extends svgProps {
    stdDeviation?: string | number;
}

export interface feOffsetProps extends svgProps {
    dx?: string | number;
    dy?: string | number;
}

export interface feMergeNodeProps extends svgProps {
    in?: string;
}

export interface feFloodProps extends svgProps {
    floodColor?: string;
    floodOpacity?: string | number;
}

export interface feTileProps extends svgProps {
    in?: string;
}

export interface feMorphologyProps extends svgProps {
    operator?: "erode" | "dilate";
    radius?: string | number;
    in?: string;
}

export interface feColorMatrixProps extends svgProps {
    type?: "matrix" | "saturate" | "hueRotate" | "luminanceToAlpha";
    values?: string;
    in?: string;
}

export interface feTurbulenceProps extends svgProps {
    baseFrequency?: string | number;
    numOctaves?: string | number;
    seed?: string | number;
    stitchTiles?: string;
    type?: string;
    in?: string;
}

export interface feCompositeProps extends svgProps {
    operator?: "over" | "in" | "out" | "atop" | "xor" | "lighter" | "darker" | "arithmetic";
    k1?: string | number;
    k2?: string | number;
    k3?: string | number;
    k4?: string | number;
    in?: string;
    in2?: string;
}

export interface feBlendProps extends svgProps {
    mode?: "normal" | "multiply" | "screen" | "darken" | "lighten" | "overlay" | "color-dodge" | "color-burn" | "hard-light" | "soft-light" | "difference" | "exclusion" | "hue" | "saturation" | "color" | "luminosity";
    in?: string;
    in2?: string;
}

export interface feDiffuseLightingProps extends svgProps {
    diffuseConstant?: string | number;
    surfaceScale?: string | number;
    lightingColor?: string;
    in?: string;
}

export interface feDisplacementMapProps extends svgProps {
    scale?: string | number;
    xChannelSelector?: string;
    yChannelSelector?: string;
    in?: string;
    in2?: string;
}

export interface feSpecularLightingProps extends svgProps {
    specularConstant?: string | number;
    specularExponent?: string | number;
    surfaceScale?: string | number;
    lightingColor?: string;
    in?: string;
}

export interface feConvolveMatrixProps extends svgProps {
    order?: string;
    kernelMatrix?: string;
    kernelUnitLength?: string;
    divisor?: string | number;
    bias?: string | number;
    targetX?: string | number;
    targetY?: string | number;
    edgeMode?: string;
    preserveAlpha?: string;
    in?: string;
}

export interface feDistantLightProps extends svgProps {
    azimuth?: string | number;
    elevation?: string | number;
}

export interface fePointLightProps extends svgProps {
    x?: string | number;
    y?: string | number;
    z?: string | number;
}

export interface feSpotLightProps extends svgProps {
    x?: string | number;
    y?: string | number;
    z?: string | number;
    pointsAtX?: string | number;
    pointsAtY?: string | number;
    pointsAtZ?: string | number;
    specularExponent?: string | number;
    limitingConeAngle?: string | number;
}

export interface imageProps extends svgProps {
    href?: string;
    x?: string | number;
    y?: string | number;
    width?: string | number;
    height?: string | number;
    preserveAspectRatio?: string;
}

export interface stopProps extends svgProps {
    offset?: string | number;
    stopColor?: string;
    stopOpacity?: string | number;
}