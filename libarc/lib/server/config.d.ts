export declare class ServerConfigurationBuilder {
    static default(): IServerConfiguration;
    private propMaxConnections;
    private propPort;
    private propHost;
    max_connections(n: number): this;
    port(port: number): this;
    host(host: string): this;
    build(): IServerConfiguration;
}
export interface IServerConfiguration {
    host: string;
    max_connections: number;
    port: number;
}
