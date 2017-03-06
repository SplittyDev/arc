import {
  IServerConfiguration,
  ServerConfigurationBuilder,
} from "./config";

import * as fs from "fs";
import * as http from "http";
import * as https from "https";
import * as net from "net";
import * as path from "path";
import * as winston from "winston";
import * as ws from "ws";

export class ArcServer {
  protected readonly conf: IServerConfiguration;
  protected readonly logger: winston.LoggerInstance;
  protected wss: ws.Server;

  constructor(conf: IServerConfiguration = ServerConfigurationBuilder.default()) {
    this.conf = conf;
    this.logger = new winston.Logger(<winston.LoggerOptions> {
      transports: [
        new winston.transports.Console(<winston.ConsoleTransportOptions> {
          level: "silly",
        }),
      ],
    });
    this.logger.cli();
    this.validateConfiguration();
  }

  /**
   * Starts listening for connections.
   *
   * @param {() => any} [callback]
   *
   * @memberOf ArcServer
   */
  public listen(callback?: () => any) {
    const verifyClientCallback: ws.VerifyClientCallbackSync = (
      info: { origin: string; secure: boolean; req: http.IncomingMessage}) => {
      // Accept secure connections
      return info.secure;
    };
    // Create https server
    const httpsServer = https.createServer(<https.ServerOptions> {
      cert: fs.readFileSync(this.conf.ssl_cert),
      key: fs.readFileSync(this.conf.ssl_key),
    });
    // Create websocket server
    this.wss = new ws.Server(<ws.IServerOptions> {
      disableHixie: true,
      path: "/arc",
      perMessageDeflate: false,
      server: httpsServer,
      verifyClient: verifyClientCallback,
    });
    // Register event handlers
    this.wss.on("connection", (ws) => {
      ws.send("00 Service operational.");
    });
    // Start listening for connections
    httpsServer.listen(<net.ListenOptions> {
      host: this.conf.host,
      port: this.conf.port,
    }, () => {
      this.logger.info(`Arc listening on wss://${this.conf.host}:${this.conf.port}/arc`);
    });
  }

  /**
   * Validates the server configuration.
   *
   * @private
   *
   * @memberOf ArcServer
   */
  private validateConfiguration() {
    // Check the port
    if (this.conf.port < 1024) {
      // Warn about ports < 1024 being privileged
      this.logger.warn(`Ports below 1024 might be privileged.`);
    }
    // Check for default SSL key/cert
    if (this.conf.ssl_key === "<default>" && this.conf.ssl_cert === "<default>") {
      // Warn about using the default SSL key-pair
      this.logger.warn("Please replace the default SSL cert with your own as soon as possible.");
      // Replace placeholders
      const basePath = path.dirname(process.argv[1]);
      this.conf.ssl_key = path.resolve(basePath, "../cert/dev_private.pem");
      this.conf.ssl_cert = path.resolve(basePath, "../cert/dev_public.pem");
    } else if (this.conf.ssl_key === "<default>") {
      // Using the default SSL key with a custom certificate is an error
      this.logger.error("SSL conflict: You are using the default key with a custom certificate.");
    } else if (this.conf.ssl_cert === "<default>") {
      // Using the default SSL certificate with a custom key is an error
      this.logger.error("SSL conflict: You are using the default certificate with a custom key.");
    }
    // Validate SSL key/cert location
    if (!fs.existsSync(this.conf.ssl_key)) {
      this.logger.error("The path specified for 'ssl_key' does not exist.");
    }
    if (!fs.existsSync(this.conf.ssl_cert)) {
      this.logger.error("The path specified for 'ssl_cert' does not exist.");
    }
  }
}
