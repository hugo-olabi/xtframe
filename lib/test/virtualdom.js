class VNode {
    constructor() {
        this.handlers = {};
        this.attrs = {};
        this._styles = {}
        this.styles = {
            set() {

            },
            get() {}
        };
        this.children = [];
    }

    on(event = "", handler = ()=>{}) {
        if(!this.handlers[event]) this.handlers[event] = [];
        this.handlers[event].push(handler);
    }

    trigger(event = "", ...args) {
        if(this.handlers[event]) {
            for(const handler of this.handlers[event]) {
                handler(...args);
            }
        }
    }

    set(attr = "", value = "") {
        this.attrs[attr] = value;
    }

    get(attr = "") {
        return this.attrs[attr];
    }
}

var el = new VNode();

el.on("click", (ev) => {
    console.log("clicked", ev.x)
})// replaces onclick and etc, and addEventListener

el.set("type", "button") // replaces setAttribute
el.get("type") // replaces getAttribute

el.trigger("click", new Event("click"))

el.style.set()
el.style.get()

el.append()
el.children