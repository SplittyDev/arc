import { IServerConfiguration } from "./config";
export declare class ArcServer {
    protected conf: IServerConfiguration;
    constructor(conf?: IServerConfiguration);
    listen(): void;
}
