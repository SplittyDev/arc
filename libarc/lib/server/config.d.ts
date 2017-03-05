export declare class ServerConfigurationBuilder {
    static default(): IServerConfiguration;
    private propMaxConnections;
    private propPort;
    private propHost;
    private sslCert;
    private sslKey;
    max_connections(n: number): this;
    port(port: number): this;
    host(host: string): this;
    ssl_key(path: string): this;
    ssl_cert(path: string): this;
    build(): IServerConfiguration;
}
export interface IServerConfiguration {
    host: string;
    max_connections: number;
    port: number;
    ssl_cert: string;
    ssl_key: string;
}
