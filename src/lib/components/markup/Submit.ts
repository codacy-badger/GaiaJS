import {InlineText} from '../InlineText'
import {MarkupComponent} from './MarkupComponent'

import './assets/submit.css'
import './assets/left.css'
import './assets/right.css'

export class Submit extends MarkupComponent{

    name:string = "SUBMIT";
    text:string;
    position:string;
    message: any;
    timestamp: any;

    constructor(message:any) {
        super(name);
        this.message = message;
        this.text = message.text;
        this.position = message.position;
        this.timestamp = message.timestamp;
    }

    render(container:any, sendMessage:any) {
        let positionClass = this.position || "left";
        let submit = document.createElement("button");

        if (!Submit.isNested(container)) {
            submit.classList.add("submit", positionClass);
        } else {
            submit.classList.add("submit-nested", positionClass);
        }

        submit.appendChild(new InlineText(this.text).render());
        container.appendChild(submit);
        let text = this.text;
        let timestamp = this.timestamp;

        submit.addEventListener('click', ev => function() {
            let attributes = {};

            let content = Submit.closestByClass(ev, "message-content");
            content.querySelectorAll("input[type='checkbox']").forEach((i:any, checkbox:any) => {
                if (checkbox.checked === true) {
                    let name = checkbox.getAttribute("name");
                    let value = checkbox.getAttribute("value");

                    if (attributes[name] !== undefined) {
                        attributes[name].push(value);
                    } else {
                        attributes[name] = [value];
                    }
                }
            });
            sendMessage({type: "submit", position: "right", timestamp: timestamp, text: text, attributes:attributes});
        });
    }

    static closestByClass (el:any, clazz:string) {
        while (el.className != clazz) {
            el = el.parentNode;
            if (!el) {
                return null;
            }
        }
        return el;
    }

}
