import {MarkupComponent} from './MarkupComponent'

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
        Row.renderElements(row, this.message, sendMessage);
        container.appendChild(row);
    }

}
