import {InlineText} from '../InlineText'
import {MarkupComponent} from './MarkupComponent'

import './assets/headline.css'

export class Headline extends MarkupComponent {

    name:string = "HEADLINE";
    message: any;

    constructor(message:any) {
        super(name);
        this.message = message;
    }

    render(container:any) {
        let position = this.message.position || "left";
        let headline = document.createElement("h2");
        headline.classList.add("headline", position);
        headline.appendChild(new InlineText(this.message.text).render())
        container.appendChild(headline);
    }

}