import {InlineText} from "../InlineText";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/headline.css";

export class Headline extends MarkupComponent {

    name:string = "HEADLINE";
    message: any;
    text: string;
    position: string;

    constructor(message: any) {
        super(name);
        this.message = message;
        this.text = message.text;
        this.position = message.position;
    }

    render(container:any) {
        let position = this.position || "left";
        let headline = document.createElement("h2");
        headline.classList.add("headline", position);
        headline.appendChild(new InlineText(this.text).render());
        container.appendChild(headline);
    }

}
