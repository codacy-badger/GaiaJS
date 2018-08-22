import {InlineText} from "../InlineText";
import {TextIcon} from "../TextIcon";
import {TextTime} from "../TextTime";
import {MarkupComponent} from "./MarkupComponent";

export class Text extends MarkupComponent {

    public static isNested(container: any) {
        return container.hasClass("block") || container.prop("tagName") === "TD";
    }

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
            text.appendChild(TextTime.render());
            text.appendChild(new InlineText(this.text).render());
            container.appendChild(new TextIcon(position).render());
            container.appendChild(text);
        } else {
            container.appendChild(new InlineText(this.text).render());
        }
    }
}
