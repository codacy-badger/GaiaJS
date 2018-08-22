import {Renderer} from "../../Renderer";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/row.css";

export class Row extends MarkupComponent {

    public name: string = "ROW";
    public message: any;

    constructor(message: any) {
        super(name);
        this.message = message;
    }

    public render(container: any, sendMessage: any) {
        const row = document.createElement("tr");
        row.classList.add("row");
        const renderer = new Renderer(row);
        Array.from(this.message.elements)
            .map((e) => Object.assign(e, {position: this.message.position}))
            .forEach((e) => renderer.render(e, sendMessage));
        container.appendChild(row);
    }

}
