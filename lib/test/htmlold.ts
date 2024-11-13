import { ElementString, NodeProps } from "./core";
import { apply, createElement, createElementAs } from "./funcs";



export interface aProps extends NodeProps {
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
    max?: string;
    min?: string;
    multiple?: string;
    name?: string;
    onChange?: string;
    pattern?: string;
    placeholder?: string;
    required?: string;
    results?: string;
    size?: string;
    src?: string;
    step?: string;
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

type genericProps = NodeProps | ElementString;

export function html(...content: (htmlProps | ElementString)[]) {
    var element = createElement("html");
    apply(element, content);

    return element
}

//Document metadata
export function base(...content: (baseProps | ElementString)[]) {
    var element = createElement("base");
    apply(element, content);

    return element
}

export function head(...content: (headProps | ElementString)[]) {
    var element = createElement("head");
    apply(element, content);

    return element
}


export function link(...content: (linkProps | ElementString)[]) {
    var element = createElement("link");
    apply(element, content);

    return element
}

export function meta(...content: (metaProps | ElementString)[]) {
    var element = createElement("meta");
    apply(element, content);

    return element
}

export function style(...content: (styleProps | ElementString)[]) {
    var element = createElement("style");
    apply(element, content);

    return element
}

export function title(...content: genericProps[]) { //Default
    var element = createElement("title");
    apply(element, content);

    return element
}

//Sectioning root
export function body(...content: genericProps[]) {
    var element = createElement("body");
    apply(element, content);

    return element
}

//Content section
export function address(...content: genericProps[]) {
    var element = createElement("address");
    apply(element, content);

    return element
}

export function article(...content: genericProps[]) {
    var element = createElement("article");
    apply(element, content);

    return element
}

export function aside(...content: genericProps[]) {
    var element = createElement("aside");
    apply(element, content);

    return element
}

export function footer(...content: genericProps[]) {
    var element = createElement("footer");
    apply(element, content);

    return element
}

export function header(...content: genericProps[]) {
    var element = createElement("header");
    apply(element, content);

    return element
}

export function h1(...content: genericProps[]) {
    var element = createElement("h1");
    apply(element, content);

    return element
}

export function h2(...content: genericProps[]) {
    var element = createElement("h2");
    apply(element, content);

    return element
}

export function h3(...content: genericProps[]) {
    var element = createElement("h3");
    apply(element, content);

    return element
}

export function h4(...content: genericProps[]) {
    var element = createElement("h4");
    apply(element, content);

    return element
}

export function h5(...content: genericProps[]) {
    var element = createElement("h5");
    apply(element, content);

    return element
}

export function h6(...content: genericProps[]) {
    var element = createElement("h6");
    apply(element, content);

    return element
}

export function hgroup(...content: genericProps[]) {
    var element = createElement("hgroup");
    apply(element, content);

    return element
}


export function main(...content: genericProps[]) {
    var element = createElement("main");
    apply(element, content);

    return element
}

export function nav(...content: genericProps[]) {
    var element = createElement("nav");
    apply(element, content);

    return element
}

export function section(...content: genericProps[]) {
    var element = createElement("section");
    apply(element, content);

    return element
}

export function search(...content: genericProps[]) {
    var element = createElement("search");
    apply(element, content);

    return element
}

//Text content
export function blockquote(...content: (blockquoteProps | ElementString)[]) {
    var element = createElement("blockquote");
    apply(element, content);

    return element
}

export function dd(...content: genericProps[]) {
    var element = createElement("dd");
    apply(element, content);

    return element
}

export function div(...content: genericProps[]) {
    var element = createElement("div");
    apply(element, content);

    return element
}

export function dl(...content: genericProps[]) {
    var element = createElement("dl");
    apply(element, content);

    return element
}

export function dt(...content: genericProps[]) {
    var element = createElement("dt");
    apply(element, content);

    return element
}

export function figcaption(...content: genericProps[]) {
    var element = createElement("figcaption");
    apply(element, content);

    return element
}

export function figure(...content: genericProps[]) {
    var element = createElement("figure");
    apply(element, content);

    return element
}

export function hr(...content: (hrProps | ElementString)[]) {
    var element = createElement("hr");
    apply(element, content);

    return element
}

export function li(...content: (liProps | ElementString)[]) {
    var element = createElement("li");
    apply(element, content);

    return element
}

export function menu(...content: genericProps[]) {
    var element = createElement("menu");
    apply(element, content);

    return element
}

export function ol(...content: (olProps | ElementString)[]) {
    var element = createElement("ol");
    apply(element, content);

    return element
}

export function p(...content: genericProps[]) {
    var element = createElement("p");
    apply(element, content);

    return element
}

export function pre(...content: (preProps | ElementString)[]) {
    var element = createElement("pre");
    apply(element, content);

    return element
}

export function ul(...content: (ulProps | ElementString)[]) {
    var element = createElement("ul");
    apply(element, content);

    return element
}

//Inline text semantics

export function a(...content: (aProps | ElementString)[]) {
    var element = createElement("a");
    apply(element, content);

    return element
}

export function abbr(...content: (abbrProps | ElementString)[]) {
    var element = createElement("abbr");
    apply(element, content);

    return element
}

export function b(...content: genericProps[]) {
    var element = createElement("b");
    apply(element, content);

    return element
}

export function bdi(...content: genericProps[]) {
    var element = createElement("bdi");
    apply(element, content);

    return element
}

export function bdo(...content: (bdoProps | ElementString)[]) {
    var element = createElement("bdo");
    apply(element, content);

    return element
}

export function br(...content: genericProps[]) {
    var element = createElement("br");
    apply(element, content);

    return element
}

export function cite(...content: genericProps[]) {
    var element = createElement("cite");
    apply(element, content);

    return element
}

export function code(...content: genericProps[]) {
    var element = createElement("code");
    apply(element, content);

    return element
}

export function data(...content: (dataProps | ElementString)[]) {
    var element = createElement("data");
    apply(element, content);

    return element
}

export function dfn(...content: (dfnProps | ElementString)[]) {
    var element = createElement("dfn");
    apply(element, content);

    return element
}

export function em(...content: genericProps[]) {
    var element = createElement("em");
    apply(element, content);

    return element
}

export function i(...content: genericProps[]) {
    var element = createElement("i");
    apply(element, content);

    return element
}

export function kbd(...content: genericProps[]) {
    var element = createElement("kbd");
    apply(element, content);

    return element
}

export function mark(...content: genericProps[]) {
    var element = createElement("mark");
    apply(element, content);

    return element
}

export function q(...content: (qProps | ElementString)[]) {
    var element = createElement("q");
    apply(element, content);

    return element
}

export function rp(...content: genericProps[]) {
    var element = createElement("rp");
    apply(element, content);

    return element
}

export function rt(...content: genericProps[]) {
    var element = createElement("rt");
    apply(element, content);

    return element
}

export function ruby(...content: genericProps[]) {
    var element = createElement("ruby");
    apply(element, content);

    return element
}

export function s(...content: genericProps[]) {
    var element = createElement("s");
    apply(element, content);

    return element
}

export function samp(...content: genericProps[]) {
    var element = createElement("samp");
    apply(element, content);

    return element
}

export function small(...content: genericProps[]) {
    var element = createElement("small");
    apply(element, content);

    return element
}

export function span(...content: genericProps[]) {
    var element = createElement("span");
    apply(element, content);

    return element
}

export function strong(...content: genericProps[]) {
    var element = createElement("strong");
    apply(element, content);

    return element
}

export function sub(...content: genericProps[]) {
    var element = createElement("sub");
    apply(element, content);

    return element
}

export function sup(...content: genericProps[]) {
    var element = createElement("sup");
    apply(element, content);

    return element
}

export function time(...content: genericProps[]) {
    var element = createElement("time");
    apply(element, content);

    return element
}

export function u(...content: genericProps[]) {
    var element = createElement("u");
    apply(element, content);

    return element
}

export function var_(...content: genericProps[]) {
    var element = createElement("var");
    apply(element, content);

    return element
}

export function wbr(...content: genericProps[]) {
    var element = createElement("wbr");
    apply(element, content);

    return element
}

//Image and multimedia
export function area(...content: (areaProps | ElementString)[]) {
    var element = createElement("area");
    apply(element, content);

    return element
}

export function audio(...content: (audioProps | ElementString)[]) {
    var element = createElement("audio");
    apply(element, content);

    return element
}

export function img(...content: (imgProps | ElementString)[]) {
    var element = createElement("img");
    apply(element, content);

    return element
}

export function map(...content: (mapProps | ElementString)[]) {
    var element = createElement("map");
    apply(element, content);

    return element
}

export function track(...content: (trackProps | ElementString)[]) {
    var element = createElement("track");
    apply(element, content);

    return element
}

export function video(...content: (videoProps | ElementString)[]) {
    var element = createElement("video");
    apply(element, content);

    return element
}

//Embedded content
export function embed(...content: (embedProps | ElementString)[]) {
    var element = createElement("embed");
    apply(element, content);

    return element
}

export function iframe(...content: (iframeProps | ElementString)[]) {
    var element = createElement("iframe");
    apply(element, content);

    return element
}

export function object(...content: (objectProps | ElementString)[]) {
    var element = createElement("object");
    apply(element, content);

    return element
}

export function picture(...content: genericProps[]) {
    var element = createElement("picture");
    apply(element, content);

    return element
}

export function portal(...content: genericProps[]) {
    var element = createElement("portal");
    apply(element, content);

    return element
}

export function source(...content: (sourceProps | ElementString)[]) {
    var element = createElement("source");
    apply(element, content);

    return element
}

export interface SVGElementOrString;

//SVG and mathML
export function svg(...content: (svgProps | ElementString)[]) {
    var element = createElement("svg");
    apply(element, content);

    return element
}

export function math(...content: genericProps[]) {
    var element = createElement("math");
    apply(element, content);

    return element
}

//Scripting
export function canvas(...content: (canvasProps | ElementString)[]) {
    var element = createElement("canvas");
    apply(element, content);

    return element
}

export function noscript(...content: genericProps[]) {
    var element = createElement("noscript");
    apply(element, content);

    return element
}

export function script(...content: (scriptProps | ElementString)[]) {
    var element = createElement("script");
    apply(element, content);

    return element
}

// Demarcating edits
export function del(...content: (delProps | ElementString)[]) {
    var element = createElement("del");
    apply(element, content);

    return element
}

export function ins(...content: (insProps | ElementString)[]) {
    var element = createElement("ins");
    apply(element, content);

    return element
}

//Table content
export function caption(...content: genericProps[]) {
    var element = createElement("caption");
    apply(element, content);

    return element
}

export function col(...content: (colProps | ElementString)[]) {
    var element = createElement("col");
    apply(element, content);

    return element
}

export function colgroup(...content: (colgroupProps | ElementString)[]) {
    var element = createElement("colgroup");
    apply(element, content);

    return element
}

export function table(...content: (tableProps | ElementString)[]) {
    var element = createElement("table");
    apply(element, content);

    return element
}

export function tbody(...content: genericProps[]) {
    var element = createElement("tbody");
    apply(element, content);

    return element
}

export function td(...content: (tdProps | ElementString)[]) {
    var element = createElement("td");
    apply(element, content);

    return element
}

export function tfoot(...content: genericProps[]) {
    var element = createElement("tfoot");
    apply(element, content);

    return element
}

export function th(...content: (thProps | ElementString)[]) {
    var element = createElement("th");
    apply(element, content);

    return element
}

export function thead(...content: genericProps[]) {
    var element = createElement("thead");
    apply(element, content);

    return element
}

export function tr(...content: genericProps[]) {
    var element = createElement("tr");
    apply(element, content);

    return element
}

//Forms

export function button(...content: (buttonProps | ElementString)[]) {
    var element = createElement("button");
    apply(element, content);

    return element
}

export function datalist(...content: genericProps[]) {
    var element = createElement("datalist");
    apply(element, content);

    return element
}

export function fieldset(...content: (fieldsetProps | ElementString)[]) {
    var element = createElement("fieldset");
    apply(element, content);

    return element
}

export function form(...content: (formProps | ElementString)[]) {
    var element = createElement("form");
    apply(element, content);

    return element
}

export function input(...content: (inputProps | ElementString)[]): HTMLInputElement {
    var element = createElementAs<HTMLInputElement>("input");
    apply(element, content);

    return element
}

export function label(...content: (labelProps | ElementString)[]) {
    var element = createElement("label");
    apply(element, content);

    return element
}

export function legend(...content: genericProps[]) {
    var element = createElement("legend");
    apply(element, content);

    return element
}

export function meter(...content: (meterProps | ElementString)[]) {
    var element = createElement("meter");
    apply(element, content);

    return element
}

export function optgroup(...content: (optgroupProps | ElementString)[]) {
    var element = createElement("optgroup");
    apply(element, content);

    return element
}

export function option(...content: (optionProps | ElementString)[]) {
    var element = createElement("option");
    apply(element, content);

    return element
}

export function output(...content: (outputProps | ElementString)[]) {
    var element = createElement("output");
    apply(element, content);

    return element
}

export function progress(...content: (progressProps | ElementString)[]) {
    var element = createElement("progress");
    apply(element, content);

    return element
}

export function select(...content: (selectProps | ElementString)[]) {
    var element = createElement("select");
    apply(element, content);

    return element
}

export function textarea(...content: (textareaProps | ElementString)[]) {
    var element = createElement("textarea");
    apply(element, content);

    return element as HTMLTextAreaElement
}

//Interactive elements

export function details(...content: (detailsProps | ElementString)[]) {
    var element = createElement("details");
    apply(element, content);

    return element
}

export function dialog(...content: (dialogProps | ElementString)[]) {
    var element = createElement("dialog");
    apply(element, content);

    return element
}

export function summary(...content: genericProps[]) {
    var element = createElement("summary");
    apply(element, content);

    return element
}

//Web Components

export function slot(...content: (slotProps | ElementString)[]) {
    var element = createElement("slot");
    apply(element, content);

    return element
}

export function template(...content: genericProps[]) {
    var element = createElement("template");
    apply(element, content);

    return element
}
