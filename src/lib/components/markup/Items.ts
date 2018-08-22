import {MarkupComponent} from './MarkupComponent'

import './assets/items.css'

export class Items extends MarkupComponent{

    name:string = "ITEMS";
    position: string;
    elements: any;

    constructor(message:any) {
        super(name);
        this.position = message.position;
        this.elements = message.elements;
    }

    render(container: any, sendMessage:any) {
        let items = document.createElement("ul");
        items.classList.add("items");
        Items.renderElements(items, this.elements, sendMessage);
        container.appendChild(items);
    }

}