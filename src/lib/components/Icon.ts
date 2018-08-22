import "./assets/text_icon.css";

export class Icon {

    public position: string;

    constructor(position: string) {
        this.position = position;
    }

    public render() {
        const textIcon = document.createElement("div");
        textIcon.classList.add("text-icon", this.position);
        return textIcon;
    }
}
