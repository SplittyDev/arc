"use strict";
const config_1 = require("./config");
const ws_1 = require("ws");
class ArcServer {
    constructor(conf = config_1.ServerConfigurationBuilder.default()) {
        this.conf = conf;
        const serverOptions = {
            disableHixie: true,
            path: `wss://0.0.0.0:${conf.port}/arc`,
            perMessageDeflate: false,
        };
        this.server = new ws_1.Server(serverOptions);
    }
    listen() {
    }
}
exports.ArcServer = ArcServer;
