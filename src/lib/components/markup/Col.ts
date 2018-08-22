import {Renderer} from "../../Renderer";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/col.css";

export class Col extends MarkupComponent {

    public name: string = "COL";
    public message: any;

    constructor(message: any) {
        super(name);
        this.message = message;
    }

    public render(container: any, sendMessage: any) {
        const col = document.createElement("td");
        col.classList.add("col");
        const renderer = new Renderer(col);
        Array.from(this.message.elements)
                .map((e) => Object.assign(e, {position: this.message.position}))
                .forEach((e) => renderer.render(e, sendMessage));
        container.appendChild(col);
    }
}
