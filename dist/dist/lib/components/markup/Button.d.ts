import { MarkupComponent } from './MarkupComponent';
import './assets/button.css';
import './assets/left.css';
import './assets/right.css';
export declare class Button extends MarkupComponent {
    name: string;
    text: string;
    buttonName: string;
    value: string;
    position: string;
    constructor(message: any);
    render(container: any, sendMessage: any): void;
    static isNested(container: any): any;
}
