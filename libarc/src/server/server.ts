import {
  IServerConfiguration,
  ServerConfigurationBuilder,
} from "./config";

export class ArcServer {
  protected conf: IServerConfiguration;

  constructor(conf: IServerConfiguration = ServerConfigurationBuilder.default()) {
    this.conf = conf;
  }

  public listen() {
    // todo
  }
}
