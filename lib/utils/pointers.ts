window.pointers = {};

export function pointer(name: string, initValue: any) {
    if (window.pointers[name]) throw new Error("Pointer already exists");
    window.pointers[name] = initValue
}

