"use strict";
const config_1 = require("./config");
const fs = require("fs");
const https = require("https");
const path = require("path");
const winston = require("winston");
const ws = require("ws");
class ArcServer {
    constructor(conf = config_1.ServerConfigurationBuilder.default()) {
        this.conf = conf;
        this.logger = new winston.Logger({
            transports: [
                new winston.transports.Console({
                    level: "silly",
                }),
            ],
        });
        this.logger.cli();
        this.validateConfiguration();
    }
    listen(callback) {
        const verifyClientCallback = (info) => {
            return info.secure;
        };
        const httpsServer = https.createServer({
            cert: fs.readFileSync(this.conf.ssl_cert),
            key: fs.readFileSync(this.conf.ssl_key),
        });
        this.wss = new ws.Server({
            disableHixie: true,
            path: "/arc",
            perMessageDeflate: false,
            server: httpsServer,
            verifyClient: verifyClientCallback,
        }, () => {
            this.logger.info(`Arc listening on wss://kekeke`);
        });
        this.wss.on("connection", (ws) => {
            ws.send("00 Service operational.");
        });
        httpsServer.listen({
            host: this.conf.host,
            port: this.conf.port,
        }, () => {
            this.logger.info(`Arc listening on wss://${this.conf.host}:${this.conf.port}/arc`);
        });
    }
    validateConfiguration() {
        if (this.conf.port < 1024) {
            this.logger.warn(`Ports below 1024 might be privileged.`);
        }
        if (this.conf.ssl_key === "<default>" && this.conf.ssl_cert === "<default>") {
            this.logger.warn("Please replace the default SSL cert with your own as soon as possible.");
            const basePath = path.dirname(process.argv[1]);
            this.conf.ssl_key = path.resolve(basePath, "../cert/dev_key.pem");
            this.conf.ssl_cert = path.resolve(basePath, "../cert/dev_cert.pem");
        }
        else if (this.conf.ssl_key === "<default>") {
            this.logger.error("SSL conflict: You are using the default key with a custom certificate.");
        }
        else if (this.conf.ssl_cert === "<default>") {
            this.logger.error("SSL conflict: You are using the default certificate with a custom key.");
        }
        if (!fs.existsSync(this.conf.ssl_key)) {
            this.logger.error("The path specified for 'ssl_key' does not exist.");
        }
        if (!fs.existsSync(this.conf.ssl_cert)) {
            this.logger.error("The path specified for 'ssl_cert' does not exist.");
        }
    }
}
exports.ArcServer = ArcServer;
