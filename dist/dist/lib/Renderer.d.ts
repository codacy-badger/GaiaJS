import { MarkupComponent } from "./components/markup/MarkupComponent";
export declare class Renderer {
    components: MarkupComponent[];
    container: any;
    constructor(container: any);
    render(message: any, sendMessage: any): void | void[];
    renderElement(element: any, sendMessage: any): void;
    getElement(message: any): MarkupComponent;
}
