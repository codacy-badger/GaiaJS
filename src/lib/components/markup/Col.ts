import {MarkupComponent} from './MarkupComponent'
import {Renderer} from '../../Renderer'

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
        let renderer = new Renderer(col);
            Array.from(this.message.elements)
                .map(e => Object.assign(e, {position: this.message.position}))
                .forEach(e => renderer.render(e, sendMessage));
        container.appendChild(col);
    }
}