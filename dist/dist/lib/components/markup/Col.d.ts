import { MarkupComponent } from './MarkupComponent';
import './assets/col.css';
export declare class Col extends MarkupComponent {
    name: string;
    message: any;
    constructor(message: any);
    render(container: any, sendMessage: any): void;
}
