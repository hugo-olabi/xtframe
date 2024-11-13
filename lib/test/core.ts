import { metaProps, scriptProps } from "./html5";

export type nodeDataType = HTMLElement[] | {}[];


interface StyleElement {
    [key: string]: string;
}

type StringFunc = string | Function;

export interface NodeProps {
    about?: string; acceptCharset?: string; accessKey?: string; allowFullScreen?: string; allowTransparency?: string; autocapitalize?: "none" | "off" | "on" | "sentences" | "words" | "characters";
    autocomplete?: "off" | "on" | "name" | "honorific-prefix" | "given-name" | "additional-name" | "family-name" | "honorific-suffix" | "nickname" | "email" | "username" | "new-password" | "current-password" | "one";
    autoFocus?: string; autoPlay?: string; capture?: string; cellPadding?: string; cellSpacing?: string; charSet?: string; classID?: string; class?: string; colSpan?: string; contenteditable?: string; contextMenu?: string; crossOrigin?: string; dangerouslySetInnerHTML?: string; datatype?: string; dateTime?: string; dir?: string; draggable?: string; encType?: string; formAction?: string; formEncType?: string; formMethod?: string; formNoValidate?: string; formTarget?: string; frameBorder?: string; hidden?: string; hrefLang?: string; htmlFor?: string; httpEquiv?: string; icon?: string; id?: string; inlist?: string; inputMode?: string; is?: string; itemID?: string; itemProp?: string; itemRef?: string; itemScope?: string; itemType?: string; keyParams?: string; keyType?: string; lang?: string; marginHeight?: string; marginWidth?: string; maxLength?: string; mediaGroup?: string; minLength?: string; noValidate?: string; onBlur?: string; onFocus?: string; onKeyDown?: string; onKeyPress?: string; onKeyUp?: string; prefix?: string; property?: string; radioGroup?: string; readOnly?: string; resource?: string; role?: string; rowSpan?: string; scoped?: string; seamless?: string; security?: string; spellCheck?: string; srcDoc?: string; srcLang?: string; srcSet?: string; style?: string | StyleElement; suppressContentEditableWarning?: string; tabIndex?: string; title?: string; typeof?: string; unselectable?: string; useMap?: string; vocab?: string; wmode?: string;
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
}



class Application {
    private lang: string;
    private head: string[] = [];
    private body = "";

    constructor(options: {
        lang?: string;
    }) {
        this.lang = options.lang || "en"
    }

    stylesheet(href: string) {
        this.head.push(
            `<link rel="stylesheet" href="${href}">`
        )
        return this
    }

    preconnect(href: string) {
        this.head.push(
            `<link rel="preconnect" href="${href}">`
        )
        return this
    }

    meta(props: metaProps) {
        this.head.push(
            `<meta ${Object.entries(props).map(([k, v]) => `${k}="${v}"`).join(" ")}>`
        )
        return this
    }

    script(props: scriptProps) {
        this.head.push(
            `<script ${Object.entries(props).map(([k, v]) => `${k}="${v}"`).join(" ")}></script>`
        )
        return this
    }

    preview(content: string) {
        this.body += content;
        return this
    }

    build() {

    }
}

export default function app(options: {
    lang?: string;
}) {
    return new Application(options)
}