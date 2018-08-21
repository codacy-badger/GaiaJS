import { MarkupComponent } from './MarkupComponent';
import './assets/block.css';
import './assets/left.css';
import './assets/right.css';
export declare class Block extends MarkupComponent {
    name: string;
    message: any;
    constructor(message: any);
    render(container: any, sendMessage: any): void;
}
