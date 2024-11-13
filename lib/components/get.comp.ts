import { render } from "../utils/funcs";
import { ElementOrString } from "../htmlT";
import { createElement } from "../utils/html";

export function get(url: string) {
    const d = createElement("div"); d.setAttribute("xtify-get-src", url);
    const s = createElement("script") as HTMLScriptElement; s.type = "module"; s.src = url;
    d.appendChild(s);
    return d;
}

export function onget(script: ImportMeta, ...content: (ElementOrString)[]) {
    const t = document.querySelector(`[xtify-get-src="${script.url.replace(window.location.origin, "")}"]`);

    if (t) {
        render(t as HTMLElement, ...content);
    } else {
        console.warn("Tried to load a non required element! Possible called outside of get()!")
    }
}