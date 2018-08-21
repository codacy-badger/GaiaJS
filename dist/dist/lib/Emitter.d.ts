export declare class Emitter {
    onConnecting(url: any, identity: any): string;
    onConnected(url: any, identity: any): string;
    onDisconnecting(url: any, identity: any): string;
    onDisconnected(url: any, identity: any): string;
    onReconnecting(url: any, identity: any): string;
    onError(error: string): string;
    onMessage(data: any): any;
}
