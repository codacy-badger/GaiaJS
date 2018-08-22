import {InlineText} from "../InlineText";
import "./assets/bold.css";
import {MarkupComponent} from "./MarkupComponent";

export class Bold extends MarkupComponent {

    public name: string = "BOLD";
    public text: string;

    constructor(message: any) {
        super(name);
        this.text = message.text;
    }

    public render(container: any) {
        const bold = document.createElement("b");
        bold.classList.add("bold");
        bold.appendChild(new InlineText(this.text).render());
        container.appendChild(bold);
    }

}
