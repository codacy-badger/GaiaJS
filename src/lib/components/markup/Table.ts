import {TextIcon} from "../TextIcon";
import {TextTime} from "../TextTime";
import {MarkupComponent} from "./MarkupComponent";

export class Table extends MarkupComponent {

    public name: string = "TABLE";
    public message: any;
    public position: string;

    constructor(message: any) {
        super(name);
        this.message = message;
        this.position = message.position;
    }

    public render(container: any, sendMessage: any) {
        const table = document.createElement("table");
        if (!Table.isNested(container)) {
            const position = this.position || "left";
            table.classList.add("table", position);
            table.appendChild(TextTime.render());
            Table.renderElements(table, this.message, sendMessage);
            container.appendChild(new TextIcon(position).render());
        } else {
            table.classList.add("table-nested");
            Table.renderElements(table, this.message, sendMessage);
        }
        container.appendChild(table);
    }
}
