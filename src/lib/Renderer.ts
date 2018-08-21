import {Block} from "./components/markup/Block";
import {Bold} from "./components/markup/Bold";
import {Button} from "./components/markup/Button";
import {Checkbox} from "./components/markup/Checkbox";
import {Col} from "./components/markup/Col";
import {Headline} from "./components/markup/Headline";
import {Image} from "./components/markup/Image";
import {Item} from "./components/markup/Item";
import {Items} from "./components/markup/Items";
import {Link} from "./components/markup/Link";
import {MarkupComponent} from "./components/markup/MarkupComponent";
import {Row} from "./components/markup/Row";
import {Table} from "./components/markup/Table";
import {Text} from "./components/markup/Text";

export class Renderer {

    public components: MarkupComponent[] = [
        Block, Bold, Button, Headline,
        Image, Item, Items, Link, Text,
        Table, Row, Col, Checkbox,
    ];
    public container: any;

    constructor(container: any) {
        this.container = container;
    }

    public render(message: any, sendMessage: any) {
        const element = this.getElement(message);
        return Array.isArray(element) ?
            element.map((e) => this.renderElement(e, sendMessage)) :
            this.renderElement(element, sendMessage);
    }

    public renderElement(element: any, sendMessage: any) {
        if (this.container) {
            element.render(this.container, sendMessage);
            const div = document.createElement("div");
            div.setAttribute("style", "clear:both");
            this.container.appendChild(div);
        }
    }

    public getElement(message: any) {
        // FIXME
        const component: MarkupComponent = Object.create(this.components[message.type.toUpperCase()]);
        component.constructor.apply(component, message);
        return component;
/*
        switch (message.type) {
            case "text": return new Text(message);
            case "button": return new Button(message);
            case "headline": return new Headline(message);
            case "link": return new Link(message);
            case "bold": return new Bold(message);
            case "image": return new Image(message);
            case "block": return new Block(message);
            case "items": return new Items(message);
            case "item": return new Item(message);
            case "container": return message.elements.map(this.getElement);
            default: throw new Error("cannot render message " + message.type);
        }
        */
    }
}
