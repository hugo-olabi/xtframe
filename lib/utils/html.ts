import { ElementOrString } from "../htmlT";

//shortcut to document.createElement:
export function createElement(tag: string) {
    return document.createElement(tag);
}

//shortcut to document.createTextNode:
export function createText(text: string) {
    return document.createTextNode(text)
}

export function titleTo(title: string) {
    document.title = title;
}

export function htmlNaming(input: string): string {
    return input
        .replace(/([a-z])([A-Z])/g, '$1-$2') // Insert hyphen between lowercase and uppercase letters
        .toLowerCase(); // Convert the whole string to lowercase
}

export function NodesFromUser(content: ElementOrString[]) {
    const nodes: Node[] = [];
    for (let child of content) {
        if (typeof child === "string") {
            nodes.push(createText(child))
        } else {
            nodes.push(child)
        }
    }

    return nodes;
}