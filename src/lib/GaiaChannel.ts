import webstomp from "webstomp-client";
import {Emitter} from "./Emitter";
import {Renderer} from "./Renderer";

export class GaiaChannel {

    public static getSessionId(self: any) {
        // FIXME
        const result = /\/([^\/]+)\/websocket/.exec(self.websocket.ws._transport.url);
        if (result) {
          return result[1];
        } else {
          return null;
        }
    }
    public emitter: Emitter;
    public renderer: Renderer;
    public websocket: any;
    public sockJS = require("sockjs");

    constructor(container: any, emitter = new Emitter()) {
        this.emitter = emitter;
        this.renderer = new Renderer(container);
    }

    /**
     * Connects to the G.A.I.A. websocket.
     *
     * @returns Promise
     */
    public connect(url: any, identity: any) {
        if (this.websocket === undefined) {
            localStorage.setItem("gaia.url", url);
            localStorage.setItem("gaia.idt", identity);

            return new Promise((resolve, reject) => {
                this.emitter.onConnecting(url, identity);
                this.websocket = webstomp.over(this.sockJS(url));

                this.websocket.debug = () => void 0; // disables webstomp logging
                const headers = {};
                headers["gaia.uid"] = localStorage.getItem("gaia.uid");
                headers["gaia.sig"] = localStorage.getItem("gaia.sig");
                headers["gaia.idt"] = localStorage.getItem("gaia.idt");

                this.websocket.connect(headers, this.onOpen(this, resolve), this.onError(this, reject));
            });
        }
        return Promise.resolve(identity);
    }

    /**
     * Disconnects from the G.A.I.A. websocket.
     *
     * @returns Promise
     */
    public disconnect() {
        if (this.websocket) {
            return new Promise((resolve) => {
                this.websocket.disconnect(() => {
                    const url = localStorage.getItem("gaia.url");
                    const idt = localStorage.getItem("gaia.idt");
                    this.emitter.onDisconnected(url, idt);
                    resolve();
                });
            });
        }
        return Promise.resolve();
    }
    /**
     * Sends the given message to backend service.
     *
     * @param msg the message to send
     * @returns Promise
     */
    public sendMessage(msg: any) {
        try {
            const element = document.getElementsByClassName("button.left").item(0);
            element.remove();
            const message = Object.assign(msg, {position: "right", timestamp: new Date().getTime()});
            this.websocket.send(
              `/app/${GaiaChannel.getSessionId(this)}`,
              {
                identity: localStorage.getItem("gaia.idt"),
              },
              JSON.stringify(message),
            );
            this.renderer.render(message, null);
            return Promise.resolve(msg);
        } catch (err) {
            this.onError(this)(err);
            return Promise.reject(err);
        }
    }
    /**
     * This callback function is invoked when a websocket connection was established successfully.
     */
    public onOpen(self: any, resolve: () => void) {
        return (evt: any) => {
            const url = localStorage.getItem("gaia.url");
            const idt = localStorage.getItem("gaia.idt");

            self.websocket.subscribe(`/queue/${GaiaChannel.getSessionId(self)}`, this.onMessage(self), {identity: idt});
            self.emitter.onConnected(url, idt);
            resolve();
        };
    }
    /**
     * This callback function is invoked when an error occured while connecting to the websocket.
     */
    public onError(self: any, reject?: () => void) {
        return (error: string) => {
            if (reject) {
              reject();
            }
            self.emitter.onError(error);
            setTimeout(() => {
                const url = localStorage.getItem("gaia.url");
                const idt = localStorage.getItem("gaia.idt");
                self.emitter.onReconnecting(url, idt);
                self.connect(url, idt);
            }, 5000);
        };
    }
    /**
     * Callback function for handling websocket messages.
     * This function is invoked when the channel receives a message from G.A.I.A..
     */
    public onMessage(self: any) {
        return (evt: any) => {
            const message = JSON.parse(evt.body);

            if (message.type) {
                self.emitter.onMessage(Object.assign(message, {position: "left"}));
                self.renderer.render(Object.assign(message, {position: "left"}), this.sendMessage.bind(this));
            } else if (message.uid && message.sig) {
                self.emitter.onMessage(message);
                localStorage.setItem("gaia.uid", message.uid);
                localStorage.setItem("gaia.sig", message.sig);
            }
        };
    }
}
