import './assets/text_time.css'

export class TextTime {

    static render() {
        let date = new Date();
        let f = (e:any) => e.toString().padStart(2, "0");

        let textTime = document.createElement("span");
        textTime.classList.add("text-time");
        textTime.appendChild(document.createTextNode(f(date.getHours()) + ':' + f(date.getMinutes())));

        return textTime;
    }
}