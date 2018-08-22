import {MarkupComponent} from './MarkupComponent'

import './assets/col.css'

export class Col extends MarkupComponent{

    name:string = "COL";
    message:any;

    constructor(message:any) {
        super(name);
        this.message = message;
    }

    render(container:any, sendMessage:any) {
        let col = document.createElement("td");
        col.classList.add("col");
        this.renderElements(col, this.message, sendMessage);
        container.appendChild(col);
    }
}