import './assets/text_icon.css'

export class TextIcon {

    position: string;

    constructor(position: string) {
        this.position = position
    }

    render() {
        let textIcon = document.createElement("div");
        textIcon.classList.add("text-icon", this.position);
        return textIcon;
    }
}