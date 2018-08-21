import {InlineText} from '../InlineText'
import {MarkupComponent} from './MarkupComponent'
import './assets/bold.css'

export class Bold extends MarkupComponent{

    name:string = "BOLD";
    text: string

    constructor(message:any) {
        super(name);
        this.text = message.text;
    }

    render(container:any) {
        let bold = document.createElement("b");
        bold.classList.add("bold");
        bold.appendChild(new InlineText(this.text).render());

        container.appendChild(bold);
    }

}