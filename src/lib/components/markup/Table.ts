import {Renderer} from "../../Renderer";
import {TextIcon} from "../TextIcon";
import {TextTime} from "../TextTime";
import {MarkupComponent} from "./MarkupComponent";

export class Table extends MarkupComponent {

    public static isNested(container: any) {
        return container.hasClass("gaia-block") || container.prop("tagName") === "TD";
    }

    public message: any;
    public name: string = "TABLE";

    constructor(message: any) {
        super(name);
        this.message = message;
    }

    public render(container: any, sendMessage: any) {
        const table = document.createElement("table");
        if (!Table.isNested(container)) {
            const position = this.message.position || "left";
            table.classList.add("table", position);
            table.appendChild(TextTime.render());

            const renderer = new Renderer(table);
            Array.from(this.message.elements)
                .map((e) => Object.assign(e, {position: this.message.position}))
                .forEach((e) => renderer.render(e, sendMessage));
            container.appendChild(new TextIcon(position).render());
        } else {
            table.classList.add("table-nested");
            const renderer = new Renderer(table);
            Array.from(this.message.elements)
                .map((e) => Object.assign(e, {position: this.message.position}))
                .forEach((e) => renderer.render(e, sendMessage));
        }
        container.appendChild(table);
    }
}
