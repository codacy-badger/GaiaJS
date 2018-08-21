import {MarkupComponent} from './MarkupComponent'

import './assets/image.css'

export class Image extends MarkupComponent{

    name:string = "IMAGE";
    source:string;
    text:string;
    width:any;
    height:any;

    constructor(message:any) {
        super(name);
        this.source = message.source;
        this.text = message.text;
        this.width = message.width || "auto";
        this.height = message.height || "auto";
    }

    render(container:any) {
        let image = document.createElement("img");
        image.setAttribute("src", this.source);
        image.setAttribute("alt", this.text);
        image.setAttribute("width", this.width);
        image.setAttribute("height", this.height);
        image.classList.add("image");
        container.appendChild(image);
    }

}