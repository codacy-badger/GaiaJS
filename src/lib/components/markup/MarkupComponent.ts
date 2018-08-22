import {Renderer} from "../../Renderer";

export class MarkupComponent {

    public static isNested(container: any) {
        return container.hasClass("block") || container.prop("tagName") === "TD";
    }

    public static renderElements(component: any, message: any, sendMessage: any) {
        const renderer = new Renderer(component);
        Array.from(message.elements)
            .map((e) => Object.assign(e, {position: message.position}))
            .forEach((e) => renderer.render(e, sendMessage));
    }

    public name: string;

    constructor(name: string) {
        this.name = name;
    }
}
