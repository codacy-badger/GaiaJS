import {InlineText} from "../InlineText";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/left.css";
import "./assets/right.css";
import "./assets/submit.css";

export class Submit extends MarkupComponent {

    public static closestByClass(el: any, clazz: string) {
        while (el.className != clazz) {
            el = el.parentNode;
            if (!el) {
                return null;
            }
        }
        return el;
    }

    public name: string = "SUBMIT";
    public text: string;
    public position: string;
    public timestamp: any;

    constructor(message: any) {
        super(name);
        this.text = message.text;
        this.position = message.position;
        this.timestamp = message.timestamp;
    }

    public render(container: any, sendMessage: any) {
        const position = this.position || "left";
        const submit = document.createElement("button");

        if (!Submit.isNested(container)) {
            submit.classList.add("submit", position);
        } else {
            submit.classList.add("submit-nested", position);
        }

        submit.appendChild(new InlineText(this.text).render());
        container.appendChild(submit);
        const text = this.text;
        const timestamp = this.timestamp;

        submit.addEventListener("click", (ev) => {
            const attributes = {};

            const content = Submit.closestByClass(ev, "message-content");
            content.querySelectorAll("input[type='checkbox']").forEach((i: any, checkbox: any) => {
                if (checkbox.checked === true) {
                    const name = checkbox.getAttribute("name");
                    const value = checkbox.getAttribute("value");

                    if (attributes[name] !== undefined) {
                        attributes[name].push(value);
                    } else {
                        attributes[name] = [value];
                    }
                }
            });
            sendMessage({type: "submit", position: "right", timestamp, text, attributes});
        });
    }

}
