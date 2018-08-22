import{InlineText} from '../InlineText'
import{TextTime} from '../TextTime'
import{TextIcon} from '../TextIcon'
import {MarkupComponent} from './MarkupComponent'

export class Text extends MarkupComponent{

    name:string = "TEXT";
    text: string;
    position: string;

    constructor(message:any) {
        super(name);
        this.text = message.text;
        this.position = message.position;
    }

    render(container:any) {
        if (!Text.isNested(container)) {
            let positionClass = this.position || "left";
            let text = document.createElement("div");
            text.classList.add("text", positionClass);
            text.appendChild(TextTime.render());
            text.appendChild(new InlineText(this.text).render());
            container.appendChild(new TextIcon(positionClass).render());
            container.appendChild(text);
        } else {
            container.appendChild(new InlineText(this.text).render());
        }
    }
}