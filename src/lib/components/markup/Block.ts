import {TextTime} from '../TextTime';
import {TextIcon} from '../TextIcon';
import {MarkupComponent} from './MarkupComponent'

import "./assets/block.css";
import "./assets/left.css";
import "./assets/right.css";

export class Block extends MarkupComponent {

    name: string = "BLOCK";
    message: any;
    position: string;

    constructor(message: any) {
        super(name);
        this.message = message;
        this.position = message.position;
    }

    render(container: any, sendMessage: any) {
        let position = this.position || "left";
        let block = document.createElement("div");
        block.classList.add("block");
        block.classList.add(position);
        block.appendChild(TextTime.render());
        Block.renderElements(block, this.message, sendMessage);
        container.appendChild(new TextIcon(position).render());
        container.appendChild(block);
    }

}
