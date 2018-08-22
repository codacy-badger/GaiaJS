import {InlineText} from "../InlineText";
import {MarkupComponent} from "./MarkupComponent";

import "./assets/headline.css";

export class Headline extends MarkupComponent {

    public name: string = "HEADLINE";
    public message: any;
    public text: string;
    public position: string;

    constructor(message: any) {
        super(name);
        this.message = message;
        this.text = message.text;
        this.position = message.position;
    }

    public render(container: any) {
        const position = this.position || "left";
        const headline = document.createElement("h2");
        headline.classList.add("headline", position);
        headline.appendChild(new InlineText(this.text).render());
        container.appendChild(headline);
    }

}
