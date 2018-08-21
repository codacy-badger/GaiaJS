import {InlineText} from '../InlineText'
import {MarkupComponent} from './MarkupComponent'

import './assets/item.css'

export class Item extends MarkupComponent{

    name:string = "ITEM";
    text: string;

    constructor(message:any) {
        super(name);
        this.text = message.text;
    }

    render(container:any) {
        let item = document.createElement("li");
        item.classList.add("item");
        item.appendChild(new InlineText(this.text).render());
        container.appendChild(item);
    }
}