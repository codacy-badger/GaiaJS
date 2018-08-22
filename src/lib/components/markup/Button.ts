import {InlineText} from '../InlineText'
import {MarkupComponent} from './MarkupComponent'

import './assets/button.css'
import './assets/left.css'
import './assets/right.css'

export class Button extends MarkupComponent{

    name:string = "BUTTON";
    text:string;
    buttonName:string;
    value:string;
    position:string;

    constructor(message:any) {
        super(name);
        this.text = message.text;
        this.buttonName = message.name;
        this.value = message.value;
        this.position = message.position;
    }

    render(container:any, sendMessage:any) {
        let positionClass = this.position || "left";
        let button = document.createElement("button")
        button.setAttribute("name", this.buttonName);

        if (!Button.isNested(container)) {
            button.classList.add("button", positionClass);
        } else {
            button.classList.add("button-nested", positionClass);
        }

        button.appendChild(new InlineText(this.text).render());
        container.appendChild(button);
        let t = this.text, n = this.buttonName, v = this.value;
        button.addEventListener('click', function() {
            sendMessage({type: "button", text: t, name: n, value: v});
        });
    }
}
