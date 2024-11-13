
export default function (){

    const tabs = passive(
        ()=>["Home", "Projects", "Games"].sort((a,b): number =>{
            let p: string = routing.way[0].pathname.split("/")[1];
            //debugger
            console.log("path:",p)

            if(p.startsWith(a.toLowerCase()) || (a.toLowerCase() === 'home' && p.length == 0)) return -1;
            if(p.startsWith(b.toLowerCase()) || (b.toLowerCase() === 'home' && p.length == 0)) return 1;

            if(a === 'Home') return 1;
            if(b === 'Home') return -1;
            
            return 0
        }).map((v)=>{
            const l = v.toLowerCase();
            const pa = routing.way[0].pathname;

            if(pa.startsWith(`/${l}`) || (pa === `/` && l === "home")){
                el.setAttribute("pagen", pa.split('/')[1]);
            }

            return span({m: ( pa.startsWith(`/${l}`) || (pa === `/` && l === "home")) ? "active" : "", anc:""},
                anchor({href: `/${l}`}, v),
                span({underline: ""})
            )
        })
    )
    const el = div(img({src: "/icons/xtnewlogo.svg", width: "50px"}),tabs);

    routing.addListener(()=>{
        tabs.react();
    });    

    return comp("Topbar",
        el
    )
}