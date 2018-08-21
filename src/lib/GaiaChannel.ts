import {Renderer} from './Renderer'
import {Emitter} from './Emitter'
import Stomp from 'stompjs'


export class GaiaChannel {

    emitter: Emitter;
    renderer: Renderer;
    websocket: any;
    sockJS = require('sockjs');

    constructor(container: any, emitter = new Emitter()) {
        this.emitter = emitter;
        this.renderer = new Renderer(container);
    }

    /**
     * Connects to the G.A.I.A. websocket.
     *
     * @returns Promise
     */
    connect(url: any, identity: any) {
        if (this.websocket === undefined) {
            localStorage.setItem("gaia.url", url);
            localStorage.setItem("gaia.idt", identity);

            return new Promise((resolve, reject) => {
                this.emitter.onConnecting(url, identity);
                this.websocket = Stomp.over(this.sockJS(url));

                this.websocket.debug = () => {
                }; // disables stomp logging
                let headers = {};
                headers["gaia.uid"] = localStorage.getItem("gaia.uid");
                headers["gaia.sig"] = localStorage.getItem("gaia.sig");
                headers["gaia.idt"] = localStorage.getItem("gaia.idt");

                this.websocket.connect(headers, this.onOpen(this, resolve), this.onError(this, reject));
            });
        }
        return Promise.resolve(identity);
    };

    static getSessionId(self: any) {
        //FIXME
        return /\/([^\/]+)\/websocket/.exec(self.websocket.ws._transport.url)[1];
    };

    /**
     * Disconnects from the G.A.I.A. websocket.
     *
     * @returns Promise
     */
    disconnect() {
        if (this.websocket !== undefined) {
            return new Promise((resolve) => {
                this.websocket.disconnect(() => {
                    let url = localStorage.getItem("gaia.url");
                    let idt = localStorage.getItem("gaia.idt");
                    this.emitter.onDisconnected(url, idt);
                    resolve();
                })
            })
        }
        return Promise.resolve();
    };

    /**
     * Sends the given message to backend service.
     *
     * @param msg the message to send
     * @returns Promise
     */
    sendMessage(msg:any) {
        try {
            let element = document.getElementsByClassName("button.left").item(0);
            element.remove();
            let message = Object.assign(msg, {position: "right", timestamp: new Date().getTime()});
            this.websocket.send(`/app/${GaiaChannel.getSessionId(this)}`, {identity: localStorage.getItem("gaia.idt")}, JSON.stringify(message));
            this.renderer.render(message, null);
            return Promise.resolve(msg);
        } catch (err) {
            this.onError(this)(err);
            return Promise.reject(err);
        }
    };

    /**
     * This callback function is invoked when a websocket connection was established successfully.
     */
    onOpen(self: any, resolve = () => {
    }) {
        return (evt: any) => {
            let url = localStorage.getItem("gaia.url");
            let idt = localStorage.getItem("gaia.idt");

            self.websocket.subscribe(`/queue/${GaiaChannel.getSessionId(self)}`, this.onMessage(self), {identity: idt});
            self.emitter.onConnected(url, idt);
            resolve();
        }
    };

    /**
     * This callback function is invoked when an error occured while connecting to the websocket.
     */
    onError(self: any, reject = () => {
    }) {
        return (error: string) => {
            reject();
            self.emitter.onError(error);
            setTimeout(() => {
                let url = localStorage.getItem("gaia.url");
                let idt = localStorage.getItem("gaia.idt");
                self.emitter.onReconnecting(url, idt);
                self.connect(url, idt);
            }, 5000);
        }
    };

    /**
     * Callback function for handling websocket messages.
     * This function is invoked when the channel receives a message from G.A.I.A..
     */
    onMessage(self:any) {
        return (evt:any) => {
            let message = JSON.parse(evt.body);

            if (message.type) {
                self.emitter.onMessage(Object.assign(message, {position:"left"}));
                self.renderer.render(Object.assign(message, {position:"left"}), this.sendMessage.bind(this));
            }
            // set user identifier
            else if (message.uid && message.sig) {
                self.emitter.onMessage(message);
                localStorage.setItem("gaia.uid", message.uid);
                localStorage.setItem("gaia.sig", message.sig);
            }
        }
    };

}