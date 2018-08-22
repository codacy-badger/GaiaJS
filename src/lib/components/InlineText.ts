import "./assets/inline_text.css";

export class InlineText {

    public text: string;

    constructor(text: string) {
        this.text = text;
    }

    public render() {
        const inlineText = document.createElement("div");
        inlineText.classList.add("inline-text");
        inlineText.appendChild(document.createTextNode(this.text));
        return inlineText;
    }
}
