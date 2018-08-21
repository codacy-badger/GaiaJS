
export class Emitter {

    // noinspection JSMethodCanBeStatic
    public onConnecting(url: any, identity: any) {
        return `connecting to url ${url} for identity ${identity}`;
    }

    // noinspection JSMethodCanBeStatic
    public onConnected(url: any, identity: any) {
        return `connected to url ${url} for identity ${identity}`;
    }

    // noinspection JSMethodCanBeStatic
    public onDisconnecting(url: any, identity: any) {
        return `disconnecting from url ${url} for identity ${identity}`;
    }

    // noinspection JSMethodCanBeStatic
    public onDisconnected(url: any, identity: any) {
        return `disconnected from url ${url} for identity ${identity}`;
    }

    // noinspection JSMethodCanBeStatic
    public onReconnecting(url: any, identity: any) {
        return `reconnecting to url ${url} for identity ${identity}`;
    }

    // noinspection JSMethodCanBeStatic
    public onError(error: string) {
        return error;
    }

    // noinspection JSMethodCanBeStatic
    public onMessage(data: any) {
        return data;
    }

}
