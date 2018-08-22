import {InlineText} from "../InlineText";

import "./assets/checkbox.css";

export class Checkbox {

    public name: string = "CHECKBOX";
    public text: string;
    public value: string;
    public position: string;

    constructor(message: any) {
        this.text = message.text;
        this.value = message.value;
        this.position = message.position;
    }

    public render(container: any) {
            const position = this.position || "left";
            const checkbox = document.createElement("input");
            checkbox.classList.add("checkbox", position);
            checkbox.setAttribute("type", "checkbox");
            checkbox.setAttribute("name", this.name);
            checkbox.appendChild(new InlineText(this.text).render());
            container.appendChild(checkbox);
    }
}
