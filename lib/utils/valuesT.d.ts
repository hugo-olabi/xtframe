export interface Values {
    px: strShortcut;
    em: strShortcut;
    rem: strShortcut;
    vw: strShortcut;
    vh: strShortcut;
    vmin: strShortcut;
    vmax: strShortcut;
    fr: strShortcut;
    mm: strShortcut;
    cm: strShortcut;
    in: strShortcut;
    pt: strShortcut;
    pc: strShortcut;
    ch: strShortcut;
    ex: strShortcut;

    rgb: (r, g, b) => string;
    rgba: (r, g, b, a) => string;
    hsl: (h, s, l) => string;
    hsla: (h, s, l, a) => string;
    linearGradient: (x1, y1, x2, y2, color1, color2) => string;
    radialGradient: (x1, y1, r1, x2, y2, r2, color1, color2) => string;
    conicGradient: (cx, cy, r, color1, color2) => string;
    repeatingLinearGradient: (x1, y1, x2, y2, color1, color2) => string;
    repeatingRadialGradient: (x1, y1, r1, x2, y2, r2, color1, color2) => string;
    repeatingConicGradient: (cx, cy, r, color1, color2) => string;
};

export type valuesObj = { [key: string]: (...content: any[]) => string };
export type strShortcut = (value) => string;