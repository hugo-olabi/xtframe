import {Converter} from "showdown";

export default function(text: string){
    const MD = new Converter()
    
    const elem = div();

    elem.innerHTML = MD.makeHtml(text);

    return comp("Markdown", elem)
}
