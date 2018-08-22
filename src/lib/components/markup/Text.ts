import {Icon} from "../Icon";
import {InlineText} from "../InlineText";
import {Timestamp} from "../Timestamp";
import {MarkupComponent} from "./MarkupComponent";

export class Text extends MarkupComponent {

    public name: string = "TEXT";
    public text: string;
    public position: string;

    constructor(message: any) {
        super(name);
        this.text = message.text;
        this.position = message.position;
    }

    public render(container: any) {
        if (!Text.isNested(container)) {
            const position = this.position || "left";
            const text = document.createElement("div");
            text.classList.add("text", position);
            text.appendChild(Timestamp.render());
            text.appendChild(new InlineText(this.text).render());
            container.appendChild(new Icon(position).render());
            container.appendChild(text);
        } else {
            container.appendChild(new InlineText(this.text).render());
        }
    }
}
