import * as winston from "winston";
import * as ws from "ws";

export type WSWebSocket = ws;

export class ArcClient {
  protected readonly logger: winston.LoggerInstance;
  protected wsc: WSWebSocket;

  constructor() {
    this.logger = new winston.Logger(<winston.LoggerOptions> {
      transports: [
        new winston.transports.Console(<winston.ConsoleTransportOptions> {
          level: "silly",
        }),
      ],
    });
    this.logger.cli();
  }

  /**
   * Connects to an arc client.
   *
   * @param {string} host
   * @param {() => void} [callback]
   *
   * @memberOf ArcClient
   */
  public connect(host: string, callback?: () => void) {
    // Create websocket client
    this.wsc = new ws(host);
    // Register event handlers
    this.wsc.on("open", () => {
      this.logger.info(`Connected to arc server (${this.wsc.url}).`);
    });
    this.wsc.on("message", (data, flags) => {
      this.logger.info(`Received message (${data}).`);
    });
  }
}
