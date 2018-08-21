import { MarkupComponent } from './MarkupComponent';
import './assets/items.css';
export declare class Items extends MarkupComponent {
    name: string;
    position: string;
    elements: any;
    constructor(message: any);
    render(container: any, sendMessage: any): void;
}
