import { anchorProps, ElementOrString } from "../htmlT";


export function anchor(...content: (undefined | anchorProps | ElementOrString)[]): HTMLAnchorElement {
    var props: anchorProps = {
        onclick: navigate
    }

    if (content.length > 0 && typeof content[0] === "object" && !(content[0] instanceof HTMLElement)) {
        props = Object.assign(props, content[0]);
        content = content.slice(1);
    }
    const el = a(props, ...content as ElementOrString[])

    function navigate(e: MouseEvent) {
        //check if href is local
        var href = el.href.replace(window.location.origin, "")

        if (href.startsWith("#/") || href.startsWith("/")) {
            href = routing.hashMode ? href : href.substring(1)
            if (el.target.length > 0) {
                window.open(href, el.target)
            } else routing.goto(el.href)
        }
        else {
            if (el.target.length > 0) window.open(el.href, el.target)
            else window.location.href = el.href
        }

        e.preventDefault()
    }    

    return el;
}