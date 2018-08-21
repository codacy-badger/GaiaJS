import { MarkupComponent } from './MarkupComponent';
export declare class Text extends MarkupComponent {
    name: string;
    text: string;
    position: string;
    constructor(message: any);
    render(container: any): void;
    static isNested(container: any): any;
}
