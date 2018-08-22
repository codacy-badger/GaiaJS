import {TextTime} from '../TextTime';
import {Renderer} from '../../Renderer';
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
            let renderer = new Renderer(table);
            Array.from(this.message.elements)
                .map(e => Object.assign(e, {position: this.message.position}))
                .forEach(e => renderer.render(e, sendMessage));
            container.appendChild(new TextIcon(position).render());
        } else {
            table.classList.add("table-nested");
            let renderer = new Renderer(table);
            Array.from(this.message.elements)
                .map(e => Object.assign(e, {position: this.message.position}))
                .forEach(e => renderer.render(e, sendMessage));
        }
        container.appendChild(table);
    }
}