import './assets/inline_text.css'

export class InlineText {

    text: string;

    constructor(text:string){
        this.text=text;
    }

    render() {
        let inlineText = document.createElement("div");
        inlineText.classList.add("inline-text");
        inlineText.appendChild(document.createTextNode(this.text));
        return inlineText;
    }
}