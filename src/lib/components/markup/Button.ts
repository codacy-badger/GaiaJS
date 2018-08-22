import {InlineText} from "../InlineText";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/button.css";
import "./assets/left.css";
import "./assets/right.css";

export class Button extends MarkupComponent {

    public static isNested(container: any) {
        return container.hasClass("block") || container.prop("tagName") === "TD";
    }

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
        const positionClass = this.position || "left";
        const button = document.createElement("button");
        button.setAttribute("name", this.buttonName);

        if (!Button.isNested(container)) {
            button.classList.add("button", positionClass);
        } else {
            button.classList.add("button-nested", positionClass);
        }

        button.appendChild(new InlineText(this.text).render());
        container.appendChild(button);
        const t = this.text, n = this.buttonName, v = this.value;
        button.addEventListener("click", function() {
            sendMessage({type: "button", text: t, name: n, value: v});
        });
    }
}
