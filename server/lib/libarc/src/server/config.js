"use strict";
class ServerConfigurationBuilder {
    constructor() {
        this.maxConnections = 1024;
    }
    static default() {
        return new ServerConfigurationBuilder().build();
    }
    max_connections(n) {
        this.maxConnections = n;
        return this;
    }
    build() {
        return {
            max_connections: this.maxConnections,
        };
    }
}
exports.ServerConfigurationBuilder = ServerConfigurationBuilder;
