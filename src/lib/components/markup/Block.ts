import {Renderer} from "../../Renderer";
import {TextIcon} from "../TextIcon";
import {TextTime} from "../TextTime";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/block.css";
import "./assets/left.css";
import "./assets/right.css";

export class Block extends MarkupComponent {

    public name: string = "BLOCK";
    public message: any;

    constructor(message: any) {
        super(name);
        this.message = message;
    }

    public render(container: any, sendMessage: any) {
        const position = this.message.position || "left";

        const block = document.createElement("div");
        block.classList.add("block");
        block.classList.add(position);
        block.appendChild(TextTime.render());

        const renderer = new Renderer(block);
        Array.from(this.message.elements)
            .map((e) => Object.assign(e, {position: this.message.position}))
            .forEach((e) => renderer.render(e, sendMessage));

        container.appendChild(new TextIcon(position).render());
        container.appendChild(block);
    }

}
