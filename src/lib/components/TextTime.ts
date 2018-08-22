import "./assets/text_time.css";

export class TextTime {

    public static render() {
        const date = new Date();
        const f = (e: any) => e.toString().padStart(2, "0");

        const textTime = document.createElement("span");
        textTime.classList.add("text-time");
        textTime.appendChild(document.createTextNode(f(date.getHours()) + ":" + f(date.getMinutes())));

        return textTime;
    }
}
