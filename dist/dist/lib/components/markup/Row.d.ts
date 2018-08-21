import { MarkupComponent } from './MarkupComponent';
import './assets/row.css';
export declare class Row extends MarkupComponent {
    name: string;
    message: any;
    constructor(message: any);
    render(container: any, sendMessage: any): void;
}
