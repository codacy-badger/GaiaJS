
export class Emitter {
    constructor() {

    }

    // noinspection JSMethodCanBeStatic
    onConnecting(url: any, identity:any) {
        console.log(`connecting to url ${url} for identity ${identity}`);
    };

    // noinspection JSMethodCanBeStatic
    onConnected(url: any, identity:any) {
        console.log(`connected to url ${url} for identity ${identity}`);
    };

    // noinspection JSMethodCanBeStatic
    onDisconnecting(url: any, identity:any) {
        console.log(`disconnecting from url ${url} for identity ${identity}`);
    };

    // noinspection JSMethodCanBeStatic
    onDisconnected(url: any, identity:any) {
        console.log(`disconnected from url ${url} for identity ${identity}`);
    };

    // noinspection JSMethodCanBeStatic
    onReconnecting(url: any, identity: any) {
        console.log(`reconnecting to url ${url} for identity ${identity}`);
    };

    // noinspection JSMethodCanBeStatic
    onError(error: string) {
        console.error(error);
    };

    // noinspection JSMethodCanBeStatic
    onMessage(data:any) {
        console.log(data);
    };

}