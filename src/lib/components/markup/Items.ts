import {Renderer} from "../../Renderer";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/items.css";

export class Items extends MarkupComponent {

    public name: string = "ITEMS";
    public position: string;
    public elements: any;

    constructor(message: any) {
        super(name);
        this.position = message.position;
        this.elements = message.elements;
    }

    public render(container: any, sendMessage: any) {
        const items = document.createElement("ul");
        items.classList.add("items");
        const renderer = new Renderer(items);
        Array.from(this.elements)
            .map((e) => Object.assign(e, {position: this.position}))
            .forEach((e) => renderer.render(e, sendMessage));
        container.appendChild(items);
    }

}
