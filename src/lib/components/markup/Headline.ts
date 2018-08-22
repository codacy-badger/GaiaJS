import {InlineText} from "../InlineText";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/headline.css";

export class Headline extends MarkupComponent {

    public name: string = "HEADLINE";
    public message: any;

    constructor(message: any) {
        super(name);
        this.message = message;
    }

    public render(container: any) {
        const position = this.message.position || "left";
        const headline = document.createElement("h2");
        headline.classList.add("headline", position);
        headline.appendChild(new InlineText(this.message.text).render());
        container.appendChild(headline);
    }

}
