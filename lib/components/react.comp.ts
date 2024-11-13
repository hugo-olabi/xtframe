import { isAsyncFunction } from "../utils/funcs";
import { NodesFromUser, createElement } from "../utils/html";
import { ReactiveRenderFunction, RenderFunction, ReactiveElement } from "../utils/utilsT";

function react(...content: (HTMLElement | ReactiveRenderFunction)[]): ReactiveElement {
    var element: HTMLElement;
    var renderFunc: RenderFunction;
    var asyncr = false;

    if (typeof content[0] !== "function") {
        element = content[0] as HTMLElement;
        renderFunc = content[1] as RenderFunction;
    } else {
        element = createElement("div");
        renderFunc = content[0] as RenderFunction;
    }

    if (isAsyncFunction(renderFunc)) {
        asyncr = true;
    }

    (element as unknown as ReactiveElement).react = async function () {
        const currentRender = asyncr ? NodesFromUser(await renderFunc()) : NodesFromUser(renderFunc());
        var ie = 0;
        if (currentRender.length == 0) element.childNodes.forEach(c => c.remove());

        currentRender.forEach((child, index) => {
            var update = true;
            if (element.childNodes[index]) {
                update = !child.isEqualNode(element.childNodes[index]);
            }
            if (update) {
                ie++;
                if (element.childNodes[index + 1] && child.isEqualNode(element.childNodes[index + 1])) {
                    element.childNodes[index].remove();
                    index -= 1;
                } else {
                    if (element.childNodes[index]) element.replaceChild(child, element.childNodes[index]);
                    else element.appendChild(child);

                    for (var i = index + 1; i < element.childNodes.length; i++) {
                        if (!element.childNodes[i].isEqualNode(child)) element.childNodes[i].remove();
                        else break;
                    }
                }
            }
            if (index + 1 == currentRender.length && currentRender.length < element.childNodes.length) {
                for (var i = index + 1; i < element.childNodes.length; i++) {
                    element.childNodes[i].remove();
                }
            }
        }) //if (ie) console.log("updated: " + ie)
    }

    return element as ReactiveElement;
}

export function live(...content: (HTMLElement | ReactiveRenderFunction)[]): ReactiveElement {
    const el = react(...content);
    el.setAttribute("xtify-live", "");
    return el;
}

export function passive(...content: (HTMLElement | ReactiveRenderFunction)[]): ReactiveElement {
    const el = react(...content);
    el.setAttribute("xtify-passive", "");
    return el;
}

setInterval(() => {
    const elems = document.querySelectorAll('[xtify-live]');

    elems.forEach(elem => {
        (elem as unknown as ReactiveElement).react();
    })
})