export class ServerConfigurationBuilder {
  public static default(): IServerConfiguration {
    return new ServerConfigurationBuilder().build();
  }

  private propMaxConnections: number = 1024;
  private propPort: number = 52000;
  private propHost: string = "0.0.0.0";
  private sslCert: string = "<default>";
  private sslKey: string = "<default>";

  public max_connections(n: number): this {
    this.propMaxConnections = n;
    return this;
  }

  public port(port: number): this {
    this.propPort = port;
    return this;
  }

  public host(host: string): this {
    this.propHost = host;
    return this;
  }

  public ssl_key(path: string): this {
    this.sslKey = path;
    return this;
  }

  public ssl_cert(path: string): this {
    this.sslCert = path;
    return this;
  }

  public build(): IServerConfiguration {
    return <IServerConfiguration> {
      host: this.propHost,
      max_connections: this.propMaxConnections,
      port: this.propPort,
      ssl_cert: this.sslCert,
      ssl_key: this.sslKey,
    };
  }
}

export interface IServerConfiguration {
  host: string;
  max_connections: number;
  port: number;
  ssl_cert: string;
  ssl_key: string;
}
