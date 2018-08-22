import {InlineText} from "../InlineText";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/button.css";
import "./assets/left.css";
import "./assets/right.css";

export class Button extends MarkupComponent {

    public name: string = "BUTTON";
    public text: string;
    public buttonName: string;
    public value: string;
    public position: string;

    constructor(message: any) {
        super(name);
        this.text = message.text;
        this.buttonName = message.name;
        this.value = message.value;
        this.position = message.position;
    }

    public render(container: any, sendMessage: any) {
        const position = this.position || "left";
        const button = document.createElement("button");
        button.setAttribute("name", this.buttonName);

        if (!Button.isNested(container)) {
            button.classList.add("button", position);
        } else {
            button.classList.add("button-nested", position);
        }
        button.appendChild(new InlineText(this.text).render());
        container.appendChild(button);
        const object = this;
        button.addEventListener("click", () => {
            sendMessage({type: "button", text: object.text, name: object.name, value: object.value});
        });
    }
}
