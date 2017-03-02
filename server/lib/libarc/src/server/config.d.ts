export declare class ServerConfigurationBuilder {
    static default(): IServerConfiguration;
    private maxConnections;
    max_connections(n: number): this;
    build(): IServerConfiguration;
}
export interface IServerConfiguration {
    max_connections: number;
}
