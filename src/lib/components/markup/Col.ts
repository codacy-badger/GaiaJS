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
        Col.renderElements(col, this.message, sendMessage);
        container.appendChild(col);
    }
}
