import { MarkupComponent } from './MarkupComponent';
import './assets/link.css';
export declare class Link extends MarkupComponent {
    name: string;
    text: string;
    value: string;
    constructor(message: any);
    render(container: any): void;
}
