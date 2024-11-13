export interface RouteObject {
    name: string;
    handler: Function;
}

export interface RouterRegistry {
    target: ElementGeneric;
    paths: { [key: string]: RouteObject };
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
export type RoutingCallback = (path: string) => void;
export interface routingType {
    hashMode: boolean;
    DEBUG: boolean;
    way: PathWay[];
    update: () => void;
    goto: (path: string, index?: number) => void;
    cached: {
        [key: string]: {
            children?: HTML.ElementOrString[];
            renderFn?: Function;
            css?: string;
            time: number;
        }
    };
    onget: {
        (scriptCtx: ImportMeta, renderFunc: Function): void;
        (scriptCtx: ImportMeta, ...content: HTML.ElementOrString[]): void;
    };
    addListener: (func: Function) => void;
    removeListener: (func: Function) => void; 
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
export interface route { (path: string, handler: string | Function): RoutePath }
export interface router {
    (props: RouterProps, ...routes: RoutePath[]): HTMLElement;
    (...routes: RoutePath[]): HTMLElement;
}

export interface render {
    (elementTarget: ElementGeneric, ...children: (ElementOrString)[])
}
export interface comp {
    (name: string, el: ElementGeneric): ElementGeneric;
}
export interface apply {
    (element: ElementGeneric, nodeData: nodeDataType, allowCamelCase?: boolean): ElementGeneric;
}
export interface applyProps {
    (element: ElementGeneric, props: { [key: string]: any }, allowCamelCase?: boolean): void;
}
export interface use {
    (nodeData: nodeDataType): PropsAndChildren;
}
export interface PropsAndChildren {
    props: PropType,
    children: ElementGeneric[]
}
export interface factory {
    (el: ElementGeneric): () => ElementGeneric;
}
export interface later {
    (func: Function, ...args: any[]): () => ElementGeneric | any
}

export type RenderFunction = () => (HTML.ElementOrString[]);
export type ReactiveRenderFunction = () => void;
export interface ReactiveElement extends HTMLElement { react: () => Promise<void>; }
export interface live {
    (root: ElementGeneric, renderFunc: ReactiveRenderFunction): ReactiveElement;
    (renderFunc: ReactiveRenderFunction): ReactiveElement;
}
export interface passive {
    (root: ElementGeneric, renderFunc: ReactiveRenderFunction): ReactiveElement;
    (renderFunc: ReactiveRenderFunction): ReactiveElement;
}

interface XTIFY {
    _styles: string[];
    _oldstyles: string[];
    globalStyle: HTMLStyleElement;
    svgNamespace: string;
}
