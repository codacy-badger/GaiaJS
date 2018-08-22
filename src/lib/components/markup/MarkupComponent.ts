export class MarkupComponent {

    name: string;

    constructor(name: string) {
        this.name = name;
    }

    static isNested(container:any) {
        return container.hasClass("block") || container.prop("tagName") === "TD";
    }
}