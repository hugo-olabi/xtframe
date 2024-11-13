import html from "./html"
import * as route from "./components/route.comp"
import * as react from "./components/react.comp"
import * as funcs from "./utils/funcs"
import * as values from "./utils/values"
import * as anchor from "./components/anchor.comp"

Object.keys(html).forEach((key) => {
    (window as any)[key] = (html as any)[key];
});

Object.keys(values).forEach((key) => {
    (window as any)[key] = (values as any)[key];
});

window.route = route.route;
window.router = route.router;

window.live = react.live;
window.passive = react.passive;

window.anchor = anchor.anchor;

window.render = funcs.render;
window.apply = funcs.apply;
window.applyProps = funcs.applyProps;
window.use = funcs.use;
window.later = funcs.later;
window.factory = funcs.factory;
window.comp = funcs.comp;
window.xtify = {
    _styles: [],
    _oldstyles: [],
    globalStyle: style(),
    svgNamespace: "http://www.w3.org/2000/svg"
}

window.document.head.append(window.xtify.globalStyle)

setInterval(() => {
    window.xtify._styles.map((v, i) => {
        if (!window.xtify._oldstyles.includes(v)) window.xtify.globalStyle.innerHTML += v;
    })
    window.xtify._oldstyles = window.xtify._styles;
})