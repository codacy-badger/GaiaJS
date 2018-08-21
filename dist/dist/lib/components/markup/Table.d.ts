import { MarkupComponent } from './MarkupComponent';
export declare class Table extends MarkupComponent {
    message: any;
    name: string;
    constructor(message: any);
    render(container: any, sendMessage: any): void;
    static isNested(container: any): any;
}
