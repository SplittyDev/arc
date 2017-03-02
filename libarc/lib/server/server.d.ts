/// <reference types="ws" />
import { IServerConfiguration } from "./config";
import { Server as WebSocketServer } from "ws";
export declare class ArcServer {
    protected readonly conf: IServerConfiguration;
    protected readonly server: WebSocketServer;
    constructor(conf?: IServerConfiguration);
    listen(): void;
}
