
export interface SearchbarProps {
    placeholder: string   
}

export default function (props?: SearchbarProps){
    return comp("Searchbar", div(
        input({placeholder: props?.placeholder || "Search", onchange: ()=>{
            
        }})
    ))
}