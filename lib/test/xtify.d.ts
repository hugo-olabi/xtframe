import * as HTML from "./htmlT";
export * as HTML from "./htmlT";

export type RouterRegistry = {
    target: HTMLElement;
    paths: { [key: string]: Function };
}
export interface RoutePath {
    path: string;
    content: string | Function;
    query: boolean;
    _isroute: boolean;
}
export type RouterLoadingElements = {
    paths: string[],
    elem: Function,
    animOnLoading?: string,
    animOnLoaded?: string
}[];

export type RouterPathWay = {
    pathname: string;
    args: { [key: string]: any };
    params: { [key: string]: any };
    hash: string;
    routers: RouterRegistry[];
    expect: {
        args: {
            [key: string]: Function;
        };
        params: {
            [key: string]: Function;
        }
    }
}
export interface routingType {
    hashMode: boolean;
    DEBUG: boolean;
    way: PathWay[];
    update: () => void;
    goto: (path: string, index?: number) => void;
    cached: {
        [key: string]: {
            children?: HTML.ElementOrString[];
            renderFn?: Function
            time: number;
        }
    };
    onget: {
        (scriptCtx: ImportMeta, renderFunc: Function): void;
        (scriptCtx: ImportMeta, ...content: HTML.ElementOrString[]): void;
    };
}
export interface RouterExpect {
    args?: { [key: string]: Function },
    params?: { [key: string]: Function }
}
export interface RouterProps extends NodeProps {
    index?: number,
    expect?: RouterExpect,
    loading_elem?: RouterLoadingElements
}
export const routing: routingType;
export function route(path: string, handler: string | Function): RoutePath
export const router: {
    (props: HTML.routerProps, ...routes: RoutePath): HTMLElement;
    (...routes: RoutePath[]): HTMLElement;
}

export function render(target: HTMLElement, ...content: HTML.ElementOrString[]): void;
export function apply(element: HTMLElement, nodeData: nodeDataType): HTMLElement;
export function applyProps(element: HTMLElement, props: { [key: string]: any; }): void;
export function use<PropType>(content: nodeDataType): { props: PropType; children: HTMLElement[]; }
export function later(func: Function, ...args: any[]): () => any;
export function factory(el: HTMLElement): () => HTMLElement;
export function comp(meta: ImportMeta, el: HTMLElement): HTMLElement;

export type liveRenderFunction = () => (HTML.ElementOrString[]);
export interface LiveElement extends HTMLElement { onxtifyreload: Function; }
export function live(...content: (HTMLElement | live.liveRenderFunction)[]): HTMLElement;

export type strShortcut = (value: number | string | any) => string;
export const px: strShortcut;


export const a: {
    (props?: HTML.anchorProps): HTMLAnchorElement;
    (props: HTML.anchorProps, ...content: HTML.ElementOrString[]): HTMLAnchorElement;
    (...content: HTML.ElementOrString[]): HTMLAnchorElement;
};
export const abbr: {
    (props?: HTML.abbrProps): HTMLElement;
    (props: HTML.abbrProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const address: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const area: (props?: HTML.areaProps) => HTMLAreaElement;
export const article: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const aside: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const audio: {
    (props?: HTML.audioProps): HTMLAudioElement;
    (props: HTML.audioProps, ...content: HTML.ElementOrString[]): HTMLAudioElement;
    (...content: HTML.ElementOrString[]): HTMLAudioElement;
};
export const b: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const base: (props?: HTML.baseProps) => HTMLBaseElement;
export const bdi: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const bdo: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const blockquote: {
    (props?: HTML.blockquoteProps): HTMLElement;
    (props: HTML.blockquoteProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const body: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const br: (props?: HTML.GenericProps) => HTMLBRElement;
export const button: {
    (props?: HTML.buttonProps): HTMLButtonElement;
    (props: HTML.buttonProps, ...content: HTML.ElementOrString[]): HTMLButtonElement;
    (...content: HTML.ElementOrString[]): HTMLButtonElement;
};
export const canvas: {
    (props?: HTML.canvasProps): HTMLCanvasElement;
    (props: HTML.canvasProps, ...content: HTML.ElementOrString[]): HTMLCanvasElement;
    (...content: HTML.ElementOrString[]): HTMLCanvasElement;
};
export const caption: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const cite: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const code: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const col: (props?: HTML.colProps) => HTMLTableColElement;
export const colgroup: (props?: HTML.colgroupProps) => HTMLTableColElement;
export const data: {
    (props?: HTML.dataProps): HTMLElement;
    (props: HTML.dataProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const datalist: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const dd: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const del: {
    (props?: HTML.delProps): HTMLElement;
    (props: HTML.delProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const details: {
    (props?: HTML.detailsProps): HTMLElement;
    (props: HTML.detailsProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const dfn: {
    (props?: HTML.dfnProps): HTMLElement;
    (props: HTML.dfnProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const dialog: {
    (props?: HTML.dialogProps): HTMLElement;
    (props: HTML.dialogProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const div: {
    (props?: HTML.GenericProps): HTMLDivElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLDivElement;
    (...content: HTML.ElementOrString[]): HTMLDivElement;
};
export const dl: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const dt: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const em: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const embed: (props?: HTML.embedProps) => HTMLElement;
export const fieldset: {
    (props?: HTML.fieldsetProps): HTMLElement;
    (props: HTML.fieldsetProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const figcaption: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const figure: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const footer: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const form: {
    (props?: HTML.formProps): HTMLFormElement;
    (props: HTML.formProps, ...content: HTML.ElementOrString[]): HTMLFormElement;
    (...content: HTML.ElementOrString[]): HTMLFormElement;
};
export const h1: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const h2: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const h3: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const h4: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const h5: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const h6: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const head: (props?: HTML.headProps) => HTMLElement;
export const header: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const hgroup: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const hr: (props?: HTML.hrProps) => HTMLHRElement;
export const html: (props?: HTML.htmlProps) => HTMLHtmlElement;
export const i: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const iframe: {
    (props?: HTML.iframeProps): HTMLIFrameElement;
    (props: HTML.iframeProps, ...content: HTML.ElementOrString[]): HTMLIFrameElement;
    (...content: HTML.ElementOrString[]): HTMLIFrameElement;
};
export const img: (props?: HTML.imgProps) => HTMLImageElement;
export const input: (props?: HTML.inputProps) => HTMLInputElement;
export const ins: {
    (props?: HTML.insProps): HTMLElement;
    (props: HTML.insProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const kbd: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const keygen: (props?: HTML.keygenProps) => HTMLElement;
export const label: {
    (props?: HTML.labelProps): HTMLLabelElement;
    (props: HTML.labelProps, ...content: HTML.ElementOrString[]): HTMLLabelElement;
    (...content: HTML.ElementOrString[]): HTMLLabelElement;
};
export const legend: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const li: {
    (props?: HTML.liProps): HTMLLIElement;
    (props: HTML.liProps, ...content: HTML.ElementOrString[]): HTMLLIElement;
    (...content: HTML.ElementOrString[]): HTMLLIElement;
};
export const link: (props?: HTML.linkProps) => HTMLLinkElement;
export const main: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const map: (props?: HTML.mapProps) => HTMLMapElement;
export const mark: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const menu: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const meta: (props?: HTML.metaProps) => HTMLMetaElement;
export const meter: {
    (props?: HTML.meterProps): HTMLElement;
    (props: HTML.meterProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const nav: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const noscript: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const object: (props?: HTML.objectProps) => HTMLElement;
export const ol: {
    (props?: HTML.olProps): HTMLOListElement;
    (props: HTML.olProps, ...content: HTML.ElementOrString[]): HTMLOListElement;
    (...content: HTML.ElementOrString[]): HTMLOListElement;
};
export const optgroup: (props?: HTML.optgroupProps) => HTMLOptGroupElement;
export const option: (props?: HTML.optionProps) => HTMLOptionElement;
export const output: {
    (props?: HTML.outputProps): HTMLElement;
    (props: HTML.outputProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const p: {
    (props?: HTML.GenericProps): HTMLParagraphElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLParagraphElement;
    (...content: HTML.ElementOrString[]): HTMLParagraphElement;
};
export const param: (props?: HTML.paramProps) => HTMLParamElement;
export const picture: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const pre: {
    (props?: HTML.preProps): HTMLElement;
    (props: HTML.preProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const progress: {
    (props?: HTML.progressProps): HTMLElement;
    (props: HTML.progressProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const q: {
    (props?: HTML.qProps): HTMLElement;
    (props: HTML.qProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const rp: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const rt: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const ruby: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const s: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const samp: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const script: (props?: HTML.scriptProps) => HTMLScriptElement;
export const section: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const select: {
    (props?: HTML.selectProps): HTMLSelectElement;
    (props: HTML.selectProps, ...content: HTML.ElementOrString[]): HTMLSelectElement;
    (...content: HTML.ElementOrString[]): HTMLSelectElement;
};
export const small: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const source: (props?: HTML.sourceProps) => HTMLSourceElement;
export const span: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const strong: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const style: (props?: HTML.styleProps) => HTMLStyleElement;
export const sub: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const summary: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const sup: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const table: {
    (props?: HTML.tableProps): HTMLTableElement;
    (props: HTML.tableProps, ...content: HTML.ElementOrString[]): HTMLTableElement;
    (...content: HTML.ElementOrString[]): HTMLTableElement;
};
export const tbody: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const td: {
    (props?: HTML.tdProps): HTMLTableDataCellElement;
    (props: HTML.tdProps, ...content: HTML.ElementOrString[]): HTMLTableDataCellElement;
    (...content: HTML.ElementOrString[]): HTMLTableDataCellElement;
};
export const template: {
    (props?: HTML.GenericProps): HTMLTemplateElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLTemplateElement;
    (...content: HTML.ElementOrString[]): HTMLTemplateElement;
};
export const textarea: {
    (props?: HTML.textareaProps): HTMLTextAreaElement;
    (props: HTML.textareaProps, ...content: HTML.ElementOrString[]): HTMLTextAreaElement;
    (...content: HTML.ElementOrString[]): HTMLTextAreaElement;
};
export const tfoot: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const th: {
    (props?: HTML.thProps): HTMLTableHeaderCellElement;
    (props: HTML.thProps, ...content: HTML.ElementOrString[]): HTMLTableHeaderCellElement;
    (...content: HTML.ElementOrString[]): HTMLTableHeaderCellElement;
};
export const thead: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const time: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const title: (props?: HTML.GenericProps) => HTMLElement;
export const tr: {
    (props?: HTML.GenericProps): HTMLTableRowElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLTableRowElement;
    (...content: HTML.ElementOrString[]): HTMLTableRowElement;
};
export const track: (props?: HTML.trackProps) => HTMLTrackElement;
export const u: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const ul: {
    (props?: HTML.ulProps): HTMLUListElement;
    (props: HTML.ulProps, ...content: HTML.ElementOrString[]): HTMLUListElement;
    (...content: HTML.ElementOrString[]): HTMLUListElement;
};
export const var_: {
    (props?: HTML.GenericProps): HTMLElement;
    (props: HTML.GenericProps, ...content: HTML.ElementOrString[]): HTMLElement;
    (...content: HTML.ElementOrString[]): HTMLElement;
};
export const video: {
    (props?: HTML.videoProps): HTMLVideoElement;
    (props: HTML.videoProps, ...content: HTML.ElementOrString[]): HTMLVideoElement;
    (...content: HTML.ElementOrString[]): HTMLVideoElement;
};
export const wbr: (props?: HTML.GenericProps) => HTMLElement;