import {MarkupComponent} from "./MarkupComponent";

import "./assets/items.css";

export class Items extends MarkupComponent {

    public name: string = "ITEMS";
    public elements: any;

    constructor(message: any) {
        super(name);
        this.elements = message.elements;
    }

    public render(container: any, sendMessage: any) {
        const items = document.createElement("ul");
        items.classList.add("items");
        Items.renderElements(items, this.elements, sendMessage);
        container.appendChild(items);
    }

}
