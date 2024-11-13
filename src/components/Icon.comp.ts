interface WindowIcon extends Window {
    icons?: string[];
    googleLink?: HTMLLinkElement;
}

const l = link({rel:"stylesheet", href:"https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=home&display=block"});
(window as WindowIcon).googleLink = l;
(window as WindowIcon).icons = ["home"];

document.head.appendChild(l);

export default function(icon: string){
    if(!(window as WindowIcon).icons?.includes(icon)){
        (window as WindowIcon).icons?.push(icon);
        l.href = `https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined&icon_names=${(window as WindowIcon).icons?.sort().join(",")}&display=block`;
    };

    return span({class:"material-symbols-outlined"}, icon)
}