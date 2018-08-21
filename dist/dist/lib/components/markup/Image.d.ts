import { MarkupComponent } from './MarkupComponent';
import './assets/image.css';
export declare class Image extends MarkupComponent {
    name: string;
    source: string;
    text: string;
    width: any;
    height: any;
    constructor(message: any);
    render(container: any): void;
}
