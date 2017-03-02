"use strict";
const config_1 = require("./config");
class ArcServer {
    constructor(conf = config_1.ServerConfigurationBuilder.default()) {
        this.conf = conf;
    }
    listen() {
    }
}
exports.ArcServer = ArcServer;
