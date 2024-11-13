import { nodeDataType, ElementOrString, ElementGeneric } from "../htmlT";
import { NodesFromUser, htmlNaming } from "./html";
import { PropsAndChildren } from "./utilsT";

export function later(func: Function, ...args: any[]) {
    return () => {
        return func(...args)
    }
}

export function factory(el: HTMLElement) {
    return () => el.cloneNode(true) as HTMLElement;
}

export function use<PropType>(content: nodeDataType): PropsAndChildren {
    if (content.length > 0 && typeof content[0] === "object" && content[0] && (content[0] as any).nodeType === undefined && !(content[0] as any).length) {
        return {
            props: content[0] as PropType,
            children: content.slice(1) as HTMLElement[]
        };
    }

    return {
        props: {} as PropType,
        children: content as HTMLElement[]
    };
}

// Suggested code may be subject to a license. Learn more: ~LicenseLog:28016020.
const wontConvertHtmlNames = [
    "viewBox", "diffuseConstant", "edgeMode", "filterUnits", "gradientTransform", "gradientUnits", "kernelMatrix",
    "kernelUnitLength", "keyPoints", "keySplines", "keyTimes", "lengthAdjust", "limitingConeAngle"
]

export function applyProps(element: ElementGeneric, props: { [key: string]: any }, allowCamelCase?: boolean) {
    //console.error(props)
    try {
        Object.entries(props)
    } catch (error) {
        console.warn("Invalid props object", props)
    }
    for (let [key, value] of Object.entries(props)) {

        if (!allowCamelCase || (allowCamelCase && !wontConvertHtmlNames.includes(key))) key = htmlNaming(key)

        // Check if the key is an event listener (e.g., "onClick")
        if (key.startsWith("on") && typeof value === "function") {
            const event = key.substring(2).toLowerCase() as keyof HTMLElementEventMap; // Ensure valid event name
            const listener = value as (this: HTMLElement, ev: Event) => any;

            // Add event listener
            element.addEventListener(event, listener);
        }
        else if (key === "style" && typeof value === "object") {
            for (let [styleKey, styleValue] of Object.entries(value as StylePropertyMap)) {
                //console.log(styleKey, styleValue)
                (element as HTMLElement).style.setProperty(htmlNaming(styleKey), styleValue);
            }
        }
        // Handle other attributes and properties
        else if (value != null && value !== undefined) {
            //console.log("meu deusd", key, value)
            element.setAttribute(key, value.toString());
        }
    }
}

export function apply(element: ElementGeneric, nodeData: nodeDataType, allowCamelCase?: boolean) {
    const node = use<{}>(nodeData);

    //console.log(node)

    // Append child elements or text
    node.children.forEach((child: ElementOrString) => {
        if (typeof child === "string") {
            const t = child.split("\n").map((v, i) => {
                return v//`${i != 0 ? "<br>" : ""}${v}`
            }).join("<br>");
            (element as HTMLElement).innerHTML += t;  // Changed to document.createTextNode
        } else {
            element.appendChild(child);

        }
    });

    // Apply props
    if (node.props) applyProps(element, node.props, allowCamelCase);

    return element;
}

export function render(elementTarget: ElementGeneric, ...children: ElementOrString[]) {
    const t = performance.now()
    elementTarget.innerHTML = "";

    NodesFromUser(children).forEach((child) => {
        elementTarget.appendChild(child);
    })
    //try { console.log(`XTIFY:\nBuilt in ${(performance.now() - t) / 1000} \\s`) } catch { }
}

export function isAsyncFunction(func: Function): boolean {
    return func.constructor.name === 'AsyncFunction';
}

export function comp(name: string, el: HTMLElement, css?: string) {

    el.setAttribute(`comp`, name)

    if (css) window.xtify._styles.push(css)

    return el;
}

