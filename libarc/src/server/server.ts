import {
  IServerConfiguration,
  ServerConfigurationBuilder,
} from "./config";

import {
  IServerOptions as IWebSocketServerOptions,
  Server as WebSocketServer,
} from "ws";

export class ArcServer {
  protected readonly conf: IServerConfiguration;
  protected readonly server: WebSocketServer;

  constructor(conf: IServerConfiguration = ServerConfigurationBuilder.default()) {
    this.conf = conf;
    const serverOptions = <IWebSocketServerOptions> {
      disableHixie: true,
      path: `wss://0.0.0.0:${conf.port}/arc`,
      perMessageDeflate: false,
    };
    this.server = new WebSocketServer(serverOptions);
  }

  public listen() {
    // todo
  }
}
