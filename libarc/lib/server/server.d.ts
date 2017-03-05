/// <reference types="winston" />
/// <reference types="ws" />
import { IServerConfiguration } from "./config";
import * as winston from "winston";
import * as ws from "ws";
export declare class ArcServer {
    protected readonly conf: IServerConfiguration;
    protected readonly logger: winston.LoggerInstance;
    protected wss: ws.Server;
    constructor(conf?: IServerConfiguration);
    listen(callback?: () => any): void;
    private validateConfiguration();
}
