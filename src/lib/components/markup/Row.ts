import {MarkupComponent} from './MarkupComponent'

import './assets/row.css'

export class Row extends MarkupComponent{

    name:string = "ROW";
    message:any;

    constructor(message:any) {
        super(name);
        this.message = message;
    }

    render(container:any, sendMessage:any) {
        let row = document.createElement("tr");
        row.classList.add("row");
        Row.renderElements(row, this.message, sendMessage);
        container.appendChild(row);
    }

}