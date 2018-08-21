import {InlineText} from '../InlineText'
import {MarkupComponent} from './MarkupComponent'

import './assets/link.css'

export class Link extends MarkupComponent{

    name:string = "LINK";
    text: string;
    value: string;

    constructor(message:any) {
        super(name);
        this.text = message.text;
        this.value = message.value;
    }

    render(container:any) {
        let link = document.createElement("a");
        link.setAttribute("href", this.value);
        link.classList.add("link");
        link.appendChild(new InlineText(this.text).render());
        container.appendChild(link);
    }

}