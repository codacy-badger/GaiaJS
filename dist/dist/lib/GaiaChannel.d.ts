import { Emitter } from "./Emitter";
import { Renderer } from "./Renderer";
export declare class GaiaChannel {
    static getSessionId(self: any): string | null;
    emitter: Emitter;
    renderer: Renderer;
    websocket: any;
    sockJS: any;
    constructor(container: any, emitter?: Emitter);
    /**
     * Connects to the G.A.I.A. websocket.
     *
     * @returns Promise
     */
    connect(url: any, identity: any): Promise<any>;
    /**
     * Disconnects from the G.A.I.A. websocket.
     *
     * @returns Promise
     */
    disconnect(): Promise<{}> | Promise<void>;
    /**
     * Sends the given message to backend service.
     *
     * @param msg the message to send
     * @returns Promise
     */
    sendMessage(msg: any): Promise<any>;
    /**
     * This callback function is invoked when a websocket connection was established successfully.
     */
    onOpen(self: any, resolve: () => void): (evt: any) => void;
    /**
     * This callback function is invoked when an error occured while connecting to the websocket.
     */
    onError(self: any, reject?: () => void): (error: string) => void;
    /**
     * Callback function for handling websocket messages.
     * This function is invoked when the channel receives a message from G.A.I.A..
     */
    onMessage(self: any): (evt: any) => void;
}
