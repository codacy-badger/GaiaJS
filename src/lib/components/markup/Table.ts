import {TextTime} from '../TextTime';
import {TextIcon} from '../TextIcon';
import {MarkupComponent} from './MarkupComponent';

export class Table extends MarkupComponent {

    message:any;
    name:string = "TABLE";

    constructor(message:any) {
        super(name);
        this.message = message;
    }

    render(container:any, sendMessage:any) {
        let table = document.createElement("table");
        if (!Table.isNested(container)) {
            let position = this.message.position || "left";
            table.classList.add("table", position);
            table.appendChild(TextTime.render());
            this.renderElements(table, this.message, sendMessage);
            container.appendChild(new TextIcon(position).render());
        } else {
            table.classList.add("table-nested");
            this.renderElements(table, this.message, sendMessage);
        }
        container.appendChild(table);
    }
}