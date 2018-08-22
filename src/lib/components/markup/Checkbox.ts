import {InlineText} from '../InlineText'

import './assets/checkbox.css'

export class Checkbox {

    name:string = "CHECKBOX";
    text:string;
    value:string;
    position:string;

    constructor(message:any) {
        this.text = message.text;
        this.value = message.value;
        this.position = message.position;
    }

    render(container:any) {
            let position = this.position || "left";
            let checkbox = document.createElement("input");
            checkbox.classList.add("checkbox", position);
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("name", this.name);
            checkbox.appendChild(new InlineText(this.text).render());
            container.appendChild(checkbox);
    }
}