import {InlineText} from "../InlineText";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/item.css";

export class Item extends MarkupComponent {

    public name: string = "ITEM";
    public text: string;

    constructor(message: any) {
        super(name);
        this.text = message.text;
    }

    public render(container: any) {
        const item = document.createElement("li");
        item.classList.add("item");
        item.appendChild(new InlineText(this.text).render());
        container.appendChild(item);
    }
}
