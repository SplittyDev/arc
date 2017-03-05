"use strict";
class ServerConfigurationBuilder {
    constructor() {
        this.propMaxConnections = 1024;
        this.propPort = 52000;
        this.propHost = "0.0.0.0";
        this.sslCert = "<default>";
        this.sslKey = "<default>";
    }
    static default() {
        return new ServerConfigurationBuilder().build();
    }
    max_connections(n) {
        this.propMaxConnections = n;
        return this;
    }
    port(port) {
        this.propPort = port;
        return this;
    }
    host(host) {
        this.propHost = host;
        return this;
    }
    ssl_key(path) {
        this.sslKey = path;
        return this;
    }
    ssl_cert(path) {
        this.sslCert = path;
        return this;
    }
    build() {
        return {
            host: this.propHost,
            max_connections: this.propMaxConnections,
            port: this.propPort,
            ssl_cert: this.sslCert,
            ssl_key: this.sslKey,
        };
    }
}
exports.ServerConfigurationBuilder = ServerConfigurationBuilder;
