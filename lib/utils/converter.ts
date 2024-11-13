export class Converter {
  private tabIndex = -1;
  private tabSize: number = 4;
  private tabSpace!: string;
  private closings: boolean = true;

  constructor(options?: { tabSize?: number, closings?: boolean }) {
    if (options) {
      this.tabSize = options.tabSize || 4;
    }
    this.tabSpace = " ".repeat(this.tabSize);
    console.log(this.tabSpace + "das")
  }
  convert(html: string) {
    const node = document.createElement("div");
    node.innerHTML = html;
    var text = this.solve(node);
    console.log(text)
    return text;
  }

  private spaceToIt(str: string) {
    return `${this.tabSpace.repeat(this.tabIndex)}${str}`;
  }

  private solve(node: Element) {
    var txt = "";
    this.tabIndex++;

    for (const childd of node.childNodes) {
      // Handle text nodes
      if (childd.nodeType === Node.TEXT_NODE) {
        const textContent = childd.textContent?.trim();
        if (textContent) {
          txt += `${this.spaceToIt(`\`${textContent}\``)}\n`; // Add the text inside the element
        }
      }
      // Handle element nodes (any tag type, not just div)
      else if (childd.nodeType === Node.ELEMENT_NODE) {
        const child = childd as Element;
        var c = `${child.tagName.toLowerCase()}(${this.solveAttr(child)}`;

        c += `${child.attributes.length > 0 ? "" + this.solve(child) : `` + this.solveTextAndNode(child)}`;
        const close = this.closings && child.childNodes.length > 0 ? "//" + child.tagName.toLowerCase() : ""
        txt += `${this.spaceToIt(c)}${child.childNodes.length + (child.attributes.length > 0 ? 1 : 0) > 1 ? this.spaceToIt(")," + close + "\n") : ")," + close + "\n"}`;
      }
    }

    this.tabIndex--;
    return txt;
  }

  private solveTextAndNode(node: Element) {
    if (node.childNodes.length == 1) {
      const childd = node.childNodes[0];
      if (childd.nodeType === Node.TEXT_NODE) {
        console.log(childd, node)
        return `"${childd.textContent?.trim()}"`
      } else {
        return this.solve(childd as Element)
      }
    } else {
      return `\n${this.solve(node)}`
    }

  }

  private solveAttr(child: Element) {
    var c = ''
    if (child.attributes.length > 0) {
      c += "{";
      const chl = child.attributes.length;
      var chi = 0;
      for (const attr of child.attributes) {
        c += `${attr.nodeName}: "${attr.nodeValue}${++chi < chl ? '", ' : '"'}`
      }
      c += `}${child.childNodes.length > 0 ? ",\n" : ""}`;
    } return c;
  }
}
//console.log(new Converter().convert(HTMLCodeD));
