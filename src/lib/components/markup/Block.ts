import {Icon} from "../Icon";
import {Timestamp} from "../Timestamp";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/block.css";
import "./assets/left.css";
import "./assets/right.css";

export class Block extends MarkupComponent {

    public name: string = "BLOCK";
    public message: any;
    public position: string;

    constructor(message: any) {
        super(name);
        this.message = message;
        this.position = message.position;
    }

    public render(container: any, sendMessage: any) {
        const position = this.position || "left";
        const block = document.createElement("div");
        block.classList.add("block");
        block.classList.add(position);
        block.appendChild(Timestamp.render());
        Block.renderElements(block, this.message, sendMessage);
        container.appendChild(new Icon(position).render());
        container.appendChild(block);
    }

}
