export function indexOfChild(node: Node, defaultValue: number = NaN) {
    return node.parentNode ?
        Array.prototype.indexOf.call(node.parentNode.children, node) :
        defaultValue;
}

export function UUID() {
    // Suggested code may be subject to a license. Learn more: ~LicenseLog:460100784.
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
        return v.toString(16);
    });
}