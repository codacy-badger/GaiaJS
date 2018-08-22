import {Renderer} from "../../Renderer";

export class MarkupComponent {

    public name: string;

    constructor(name: string) {
        this.name = name;
    }

    static isNested(container:any) {
        return container.hasClass("block") || container.prop("tagName") === "TD";
    }

    static renderElements(component:any, message:any, sendMessage:any) {
        let renderer = new Renderer(component);
        Array.from(message.elements)
            .map(e => Object.assign(e, {position: message.position}))
            .forEach(e => renderer.render(e, sendMessage));
    }
}
