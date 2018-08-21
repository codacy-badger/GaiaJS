import { MarkupComponent } from './MarkupComponent';
import './assets/headline.css';
export declare class Headline extends MarkupComponent {
    name: string;
    message: any;
    constructor(message: any);
    render(container: any): void;
}
