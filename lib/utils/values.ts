import { htmlNaming } from "./html"
import { Values, valuesObj } from "./valuesT"

// Based on:
// https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Values_and_units

const [vals, funcs] = [[
    //Units
    "px", "mm", "cm", "Q", "in", "pt", "pc", "em", "ex", "ch", "rem", "vw", "vh", "vmin", "vmax", "fr"
], [
    //Functions
    "rgb", "rgba", "hsl", "hsla", "linear-gradient", "radial-gradient", "conic-gradient", "repeating-linear-gradient", "repeating-radial-gradient", "repeating-conic-gradient"
]]

const values: valuesObj = {
    percent: (value: number) => `${value}%`
}

for (const v of vals) {
    values[v] = (value: any) => `${value}${v}`
}

for (const v of funcs) {
    values[htmlNaming(v)] = (...value: any[]) => `${v}(${value.join(", ")})`
}


export default values as unknown as Values;

export interface StyleProperties {
    alignItems?: "baseline" | "center" | "end" | "first baseline" | "flex-end" | "flex-start" | "last baseline" | "normal" | "safe" | "self-end" | "self-start" | "stretch" | "start" | "unsafe" | "inherit" | "initial" | "unset";
    alignSelf?: "auto" | "baseline" | "center" | "end" | "flex-end" | "flex-start" | "normal" | "safe" | "self-end" | "self-start" | "stretch" | "start" | "unsafe" | "inherit" | "initial" | "unset";
    animation?: string | "none" | "inherit" | "initial" | "unset";
    animationDelay?: string | "inherit" | "initial" | "unset";
    animationDirection?: "alternate" | "alternate-reverse" | "normal" | "reverse" | "inherit" | "initial" | "unset";
    animationDuration?: string | "inherit" | "initial" | "unset";
    animationFillMode?: "backwards" | "both" | "forwards" | "none" | "inherit" | "initial" | "unset";
    animationIterationCount?: number | "infinite" | "inherit" | "initial" | "unset";
    animationName?: string | "none" | "inherit" | "initial" | "unset";
    animationPlayState?: "paused" | "running" | "inherit" | "initial" | "unset";
    animationTimingFunction?: "ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "step-end" | "step-start" | "steps(number, start|end)" | "cubic-bezier(number, number, number, number)" | "inherit" | "initial" | "unset";
    appearance?: "none" | "auto" | "button" | "checkbox" | "menulist" | "menubar" | "menuitem" | "radio" | "searchfield" | "slider" | "spinbutton" | "textbox" | "inherit" | "initial" | "unset";
    backfaceVisibility?: "hidden" | "visible" | "inherit" | "initial" | "unset";
    background?: string | "inherit" | "initial" | "unset";
    backgroundAttachment?: "fixed" | "local" | "scroll" | "inherit" | "initial" | "unset";
    backgroundBlendMode?: "color" | "color-dodge" | "color-burn" | "darken" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "luminosity" | "multiply" | "normal" | "overlay" | "screen" | "saturation" | "soft-light" | "inherit" | "initial" | "unset";
    backgroundClip?: "border-box" | "content-box" | "padding-box" | "inherit" | "initial" | "unset";
    backgroundColor?: string | "inherit" | "initial" | "unset";
    backgroundImage?: string | "none" | "inherit" | "initial" | "unset";
    backgroundOrigin?: "border-box" | "content-box" | "padding-box" | "inherit" | "initial" | "unset";
    backgroundPosition?: string | "inherit" | "initial" | "unset";
    backgroundRepeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "inherit" | "initial" | "unset";
    backgroundSize?: string | "auto" | "contain" | "cover" | "inherit" | "initial" | "unset";
    border?: string | "inherit" | "initial" | "unset";
    borderBottom?: string | "inherit" | "initial" | "unset";
    borderBottomColor?: string | "inherit" | "initial" | "unset";
    borderBottomLeftRadius?: string | "inherit" | "initial" | "unset";
    borderBottomRightRadius?: string | "inherit" | "initial" | "unset";
    borderBottomStyle?: "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden" | "inherit" | "initial" | "unset";
    borderBottomWidth?: string | "inherit" | "initial" | "unset";
    borderCollapse?: "collapse" | "separate" | "inherit" | "initial" | "unset";
    borderColor?: string | "inherit" | "initial" | "unset";
    borderImage?: string | "none" | "inherit" | "initial" | "unset";
    borderImageOutset?: string | "inherit" | "initial" | "unset";
    borderImageRepeat?: "stretch" | "repeat" | "round" | "space" | "inherit" | "initial" | "unset";
    borderImageSlice?: string | "inherit" | "initial" | "unset";
    borderImageSource?: string | "none" | "inherit" | "initial" | "unset";
    borderImageWidth?: string | "inherit" | "initial" | "unset";
    borderLeft?: string | "inherit" | "initial" | "unset";
    borderLeftColor?: string | "inherit" | "initial" | "unset";
    borderLeftStyle?: "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden" | "inherit" | "initial" | "unset";
    borderLeftWidth?: string | "inherit" | "initial" | "unset";
    borderRadius?: string | "inherit" | "initial" | "unset";
    borderRight?: string | "inherit" | "initial" | "unset";
    borderRightColor?: string | "inherit" | "initial" | "unset";
    borderRightStyle?: "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden" | "inherit" | "initial" | "unset";
    borderRightWidth?: string | "inherit" | "initial" | "unset";
    borderSpacing?: string | "inherit" | "initial" | "unset";
    borderStyle?: "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden" | "inherit" | "initial" | "unset";
    borderTop?: string | "inherit" | "initial" | "unset";
    borderTopColor?: string | "inherit" | "initial" | "unset";
    borderTopLeftRadius?: string | "inherit" | "initial" | "unset";
    borderTopRightRadius?: string | "inherit" | "initial" | "unset";
    borderTopStyle?: "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden" | "inherit" | "initial" | "unset";
    borderTopWidth?: string | "inherit" | "initial" | "unset";
    borderWidth?: string | "inherit" | "initial" | "unset";
    bottom?: string | "auto" | "inherit" | "initial" | "unset";
    boxDecorationBreak?: "slice" | "clone" | "inherit" | "initial" | "unset";
    boxShadow?: string | "none" | "inherit" | "initial" | "unset";
    boxSizing?: "border-box" | "content-box" | "inherit" | "initial" | "unset";
    breakAfter?: "auto" | "avoid" | "avoid-column" | "avoid-page" | "column" | "left" | "page" | "right" | "inherit" | "initial" | "unset";
    breakBefore?: "auto" | "avoid" | "avoid-column" | "avoid-page" | "column" | "left" | "page" | "right" | "inherit" | "initial" | "unset";
    breakInside?: "auto" | "avoid" | "avoid-column" | "avoid-page" | "column" | "inherit" | "initial" | "unset";
    captionSide?: "bottom" | "top" | "inherit" | "initial" | "unset";
    caretColor?: string | "inherit" | "initial" | "unset";
    clear?: "both" | "left" | "none" | "right" | "inherit" | "initial" | "unset";
    clip?: string | "auto" | "inherit" | "initial" | "unset";
    clipPath?: string | "none" | "inherit" | "initial" | "unset";
    color?: string | "inherit" | "initial" | "unset";
    columnCount?: number | "auto" | "inherit" | "initial" | "unset";
    columnFill?: "auto" | "balance" | "inherit" | "initial" | "unset";
    columnGap?: string | "normal" | "inherit" | "initial" | "unset";
    columnRule?: string | "inherit" | "initial" | "unset";
    columnRuleColor?: string | "inherit" | "initial" | "unset";
    columnRuleStyle?: "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | "none" | "hidden" | "inherit" | "initial" | "unset";
    columnRuleWidth?: string | "inherit" | "initial" | "unset";
    columnSpan?: number | "all" | "inherit" | "initial" | "unset";
    columnWidth?: string | "auto" | "inherit" | "initial" | "unset";
    columns?: string | "inherit" | "initial" | "unset";
    content?: string | "normal" | "none" | "inherit" | "initial" | "unset";
    counterIncrement?: string | "none" | "inherit" | "initial" | "unset";
    counterReset?: string | "none" | "inherit" | "initial" | "unset";
    cursor?: string | "auto" | "default" | "pointer" | "progress" | "wait" | "cell" | "crosshair" | "text" | "vertical-text" | "alias" | "copy" | "move" | "no-drop" | "not-allowed" | "grab" | "grabbing" | "e-resize" | "n-resize" | "ne-resize" | "nw-resize" | "s-resize" | "se-resize" | "sw-resize" | "w-resize" | "ew-resize" | "ns-resize" | "nesw-resize" | "nwse-resize" | "zoom-in" | "zoom-out" | "inherit" | "initial" | "unset";
    direction?: "ltr" | "rtl" | "inherit" | "initial" | "unset";
    display?: "none" | "inline" | "inline-block" | "block" | "flex" | "inline-flex" | "grid" | "inline-grid" | "list-item" | "run-in" | "table" | "table-row" | "table-column" | "table-cell" | "table-caption" | "table-row-group" | "table-header-group" | "table-footer-group" | "table-column-group" | "table-row-group" | "table-header-group" | "table-footer-group" | "inherit" | "initial" | "unset";
    emptyCells?: "show" | "hide" | "inherit" | "initial" | "unset";
    filter?: string | "none" | "inherit" | "initial" | "unset";
    flex?: string | "none" | "inherit" | "initial" | "unset";
    flexBasis?: string | "auto" | "content" | "inherit" | "initial" | "unset";
    flexDirection?: "row" | "row-reverse" | "column" | "column-reverse" | "inherit" | "initial" | "unset";
    flexFlow?: string | "inherit" | "initial" | "unset";
    flexGrow?: number | "inherit" | "initial" | "unset";
    flexShrink?: number | "inherit" | "initial" | "unset";
    flexWrap?: "nowrap" | "wrap" | "wrap-reverse" | "inherit" | "initial" | "unset";
    float?: "left" | "right" | "none" | "inherit" | "initial" | "unset";
    font?: string | "inherit" | "initial" | "unset";
    fontFamily?: string | "inherit" | "initial" | "unset";
    fontFeatureSettings?: string | "normal" | "inherit" | "initial" | "unset";
    fontKerning?: "normal" | "none" | "inherit" | "initial" | "unset";
    fontSize?: string | "inherit" | "initial" | "unset";
    fontSizeAdjust?: "none" | "inherit" | "initial" | "unset";
    fontStretch?: "normal" | "ultra-condensed" | "extra-condensed" | "condensed" | "semi-condensed" | "semi-expanded" | "expanded" | "extra-expanded" | "ultra-expanded" | "inherit" | "initial" | "unset";
    fontStyle?: "normal" | "italic" | "oblique" | "inherit" | "initial" | "unset";
    fontVariant?: "normal" | "small-caps" | "inherit" | "initial" | "unset";
    fontVariantCaps?: "normal" | "small-caps" | "all-small-caps" | "petite-caps" | "all-petite-caps" | "unicase" | "inherit" | "initial" | "unset";
    fontVariantEastAsian?: "normal" | "jis78" | "jis90" | "jis2004" | "simplified" | "traditional" | "inherit" | "initial" | "unset";
    fontVariantLigatures?: "normal" | "none" | "common-ligatures" | "no-common-ligatures" | "discretionary-ligatures" | "no-discretionary-ligatures" | "historical-ligatures" | "no-historical-ligatures" | "contextual" | "no-contextual" | "inherit" | "initial" | "unset";
    fontWeight?: number | "normal" | "bold" | "bolder" | "lighter" | "inherit" | "initial" | "unset";
    gap?: string | "normal" | "inherit" | "initial" | "unset";
    grid?: string | "none" | "inherit" | "initial" | "unset";
    gridArea?: string | "auto" | "inherit" | "initial" | "unset";
    gridAutoColumns?: string | "min-content" | "max-content" | "auto" | "inherit" | "initial" | "unset";
    gridAutoFlow?: "row" | "column" | "dense" | "row dense" | "column dense" | "inherit" | "initial" | "unset";
    gridAutoRows?: string | "min-content" | "max-content" | "auto" | "inherit" | "initial" | "unset";
    gridColumn?: string | "auto" | "span" | "inherit" | "initial" | "unset";
    gridColumnEnd?: string | "auto" | "span" | "inherit" | "initial" | "unset";
    gridColumnStart?: string | "auto" | "span" | "inherit" | "initial" | "unset";
    gridRow?: string | "auto" | "span" | "inherit" | "initial" | "unset";
    gridRowEnd?: string | "auto" | "span" | "inherit" | "initial" | "unset";
    gridRowStart?: string | "auto" | "span" | "inherit" | "initial" | "unset";
    gridTemplateAreas?: string | "none" | "inherit" | "initial" | "unset";
    gridTemplateColumns?: string | "none" | "inherit" | "initial" | "unset";
    gridTemplateRows?: string | "none" | "inherit" | "initial" | "unset";
    height?: string | "auto" | "inherit" | "initial" | "unset";
    hyphens?: "none" | "manual" | "auto" | "inherit" | "initial" | "unset";
    imageOrientation?: "from-image" | "from-image" | "from-image" | "from-image" | "inherit" | "initial" | "unset";
    imageRendering?: "auto" | "crisp-edges" | "pixelated" | "inherit" | "initial" | "unset";
    isolation?: "auto" | "isolate" | "inherit" | "initial" | "unset";
    justifyContent?: "flex-start" | "flex-end" | "center" | "space-between" | "space-around" | "space-evenly" | "stretch" | "inherit" | "initial" | "unset";
    justifyItems?: "auto" | "stretch" | "start" | "end" | "center" | "left" | "right" | "inherit" | "initial" | "unset";
    justifySelf?: "auto" | "stretch" | "start" | "end" | "center" | "left" | "right" | "inherit" | "initial" | "unset";
    left?: string | "auto" | "inherit" | "initial" | "unset";
    letterSpacing?: string | "normal" | "inherit" | "initial" | "unset";
    lineBreak?: "auto" | "loose" | "normal" | "strict" | "inherit" | "initial" | "unset";
    lineHeight?: string | "normal" | "inherit" | "initial" | "unset";
    listStyle?: string | "none" | "inherit" | "initial" | "unset";
    listStyleImage?: string | "none" | "inherit" | "initial" | "unset";
    listStylePosition?: "inside" | "outside" | "inherit" | "initial" | "unset";
    listStyleType?: "disc" | "circle" | "square" | "decimal" | "decimal-leading-zero" | "lower-roman" | "upper-roman" | "lower-greek" | "lower-alpha" | "upper-alpha" | "none" | "inherit" | "initial" | "unset";
    margin?: string | "auto" | "inherit" | "initial" | "unset";
    marginBottom?: string | "auto" | "inherit" | "initial" | "unset";
    marginLeft?: string | "auto" | "inherit" | "initial" | "unset";
    marginRight?: string | "auto" | "inherit" | "initial" | "unset";
    marginTop?: string | "auto" | "inherit" | "initial" | "unset";
    mask?: string | "none" | "inherit" | "initial" | "unset";
    maskBorder?: string | "inherit" | "initial" | "unset";
    maskClip?: "border-box" | "content-box" | "padding-box" | "inherit" | "initial" | "unset";
    maskComposite?: "add" | "subtract" | "intersect" | "exclude" | "inherit" | "initial" | "unset";
    maskImage?: string | "none" | "inherit" | "initial" | "unset";
    maskMode?: "alpha" | "luminance" | "inherit" | "initial" | "unset";
    maskOrigin?: "border-box" | "content-box" | "padding-box" | "inherit" | "initial" | "unset";
    maskRepeat?: "no-repeat" | "repeat" | "repeat-x" | "repeat-y" | "inherit" | "initial" | "unset";
    maskSize?: string | "auto" | "contain" | "cover" | "inherit" | "initial" | "unset";
    maskType?: "luminance" | "alpha" | "inherit" | "initial" | "unset";
    maxHeight?: string | "none" | "inherit" | "initial" | "unset";
    maxWidth?: string | "none" | "inherit" | "initial" | "unset";
    minHeight?: string | "auto" | "inherit" | "initial" | "unset";
    minWidth?: string | "auto" | "inherit" | "initial" | "unset";
    mixBlendMode?: "color" | "color-dodge" | "color-burn" | "darken" | "difference" | "exclusion" | "hard-light" | "hue" | "lighten" | "luminosity" | "multiply" | "normal" | "overlay" | "screen" | "saturation" | "soft-light" | "inherit" | "initial" | "unset";
    objectFit?: "fill" | "contain" | "cover" | "scale-down" | "none" | "inherit" | "initial" | "unset";
    objectPosition?: string | "inherit" | "initial" | "unset";
    opacity?: number | "inherit" | "initial" | "unset";
    order?: number | "inherit" | "initial" | "unset";
    outline?: string | "inherit" | "initial" | "unset";
    outlineColor?: string | "invert" | "inherit" | "initial" | "unset";
    outlineOffset?: string | "inherit" | "initial" | "unset";
    outlineStyle?: "auto" | "dotted" | "dashed" | "solid" | "double" | "groove" | "ridge" | "inset" | "outset" | "inherit" | "initial" | "unset";
    outlineWidth?: string | "inherit" | "initial" | "unset";
    overflow?: "visible" | "hidden" | "scroll" | "auto" | "inherit" | "initial" | "unset";
    overflowWrap?: "normal" | "break-word" | "inherit" | "initial" | "unset";
    overflowX?: "visible" | "hidden" | "scroll" | "auto" | "inherit" | "initial" | "unset";
    overflowY?: "visible" | "hidden" | "scroll" | "auto" | "inherit" | "initial" | "unset";
    padding?: string | "inherit" | "initial" | "unset";
    paddingBottom?: string | "inherit" | "initial" | "unset";
    paddingLeft?: string | "inherit" | "initial" | "unset";
    paddingRight?: string | "inherit" | "initial" | "unset";
    paddingTop?: string | "inherit" | "initial" | "unset";
    pageBreakAfter?: "auto" | "avoid" | "always" | "left" | "right" | "inherit" | "initial" | "unset";
    pageBreakBefore?: "auto" | "avoid" | "always" | "left" | "right" | "inherit" | "initial" | "unset";
    pageBreakInside?: "auto" | "avoid" | "inherit" | "initial" | "unset";
    perspective?: string | "none" | "inherit" | "initial" | "unset";
    perspectiveOrigin?: string | "inherit" | "initial" | "unset";
    pointerEvents?: "auto" | "none" | "visiblePainted" | "visibleFill" | "visibleStroke" | "painted" | "fill" | "stroke" | "all" | "inherit" | "initial" | "unset";
    position?: "static" | "relative" | "absolute" | "fixed" | "sticky" | "inherit" | "initial" | "unset";
    quotes?: string | "inherit" | "initial" | "unset";
    resize?: "none" | "both" | "horizontal" | "vertical" | "inherit" | "initial" | "unset";
    right?: string | "auto" | "inherit" | "initial" | "unset";
    rowGap?: string | "normal" | "inherit" | "initial" | "unset";
    scrollBehavior?: "auto" | "smooth" | "inherit" | "initial" | "unset";
    tabSize?: number | "inherit" | "initial" | "unset";
    tableLayout?: "auto" | "fixed" | "inherit" | "initial" | "unset";
    textAlign?: "left" | "right" | "center" | "justify" | "start" | "end" | "inherit" | "initial" | "unset";
    textAlignLast?: "auto" | "start" | "end" | "left" | "right" | "center" | "justify" | "inherit" | "initial" | "unset";
    textDecoration?: "none" | "underline" | "overline" | "line-through" | "blink" | "inherit" | "initial" | "unset";
    textDecorationColor?: string | "inherit" | "initial" | "unset";
    textDecorationLine?: "none" | "underline" | "overline" | "line-through" | "inherit" | "initial" | "unset";
    textDecorationStyle?: "solid" | "double" | "dotted" | "dashed" | "wavy" | "inherit" | "initial" | "unset";
    textDecorationThickness?: string | "auto" | "from-font" | "inherit" | "initial" | "unset";
    textIndent?: string | "inherit" | "initial" | "unset";
    textJustify?: "auto" | "inter-word" | "inter-character" | "distribute" | "kashida" | "inherit" | "initial" | "unset";
    textOverflow?: "clip" | "ellipsis" | "inherit" | "initial" | "unset";
    textShadow?: string | "none" | "inherit" | "initial" | "unset";
    textTransform?: "none" | "capitalize" | "uppercase" | "lowercase" | "full-width" | "inherit" | "initial" | "unset";
    top?: string | "auto" | "inherit" | "initial" | "unset";
    transform?: string | "none" | "inherit" | "initial" | "unset";
    transformOrigin?: string | "inherit" | "initial" | "unset";
    transformStyle?: "flat" | "preserve-3d" | "inherit" | "initial" | "unset";
    transition?: string | "none" | "inherit" | "initial" | "unset";
    transitionDelay?: string | "inherit" | "initial" | "unset";
    transitionDuration?: string | "inherit" | "initial" | "unset";
    transitionProperty?: string | "none" | "all" | "inherit" | "initial" | "unset";
    transitionTimingFunction?: "ease" | "ease-in" | "ease-in-out" | "ease-out" | "linear" | "step-end" | "step-start" | "steps(number, start|end)" | "cubic-bezier(number, number, number, number)" | "inherit" | "initial" | "unset";
    userSelect?: "auto" | "none" | "text" | "contain" | "all" | "inherit" | "initial" | "unset";
    verticalAlign?: "baseline" | "sub" | "super" | "text-top" | "text-bottom" | "middle" | "top" | "bottom" | "inherit" | "initial" | "unset";
    visibility?: "visible" | "hidden" | "collapse" | "inherit" | "initial" | "unset";
    whiteSpace?: "normal" | "pre" | "nowrap" | "pre-wrap" | "pre-line" | "break-spaces" | "inherit" | "initial" | "unset";
    width?: string | "auto" | "inherit" | "initial" | "unset";
    willChange?: string | "auto" | "inherit" | "initial" | "unset";
    wordBreak?: "normal" | "break-all" | "keep-all" | "break-word" | "inherit" | "initial" | "unset";
    wordSpacing?: string | "normal" | "inherit" | "initial" | "unset";
    wordWrap?: "normal" | "break-word" | "inherit" | "initial" | "unset";
    writingMode?: "horizontal-tb" | "vertical-rl" | "vertical-lr" | "inherit" | "initial" | "unset";
    zIndex?: number | "auto" | "inherit" | "initial" | "unset";
}
