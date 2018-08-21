import {MarkupComponent} from './MarkupComponent'
import {Renderer} from '../../Renderer'

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
        let renderer = new Renderer(row);
        Array.from(this.message.elements)
            .map(e => Object.assign(e, {position: this.message.position}))
            .forEach(e => renderer.render(e, sendMessage));
        container.appendChild(row);
    }

}