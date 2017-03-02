
  export class ServerConfigurationBuilder {
    public static default(): IServerConfiguration {
      return new ServerConfigurationBuilder().build();
    }

    private maxConnections: number = 1024;

    public max_connections(n: number): this {
      this.maxConnections = n;
      return this;
    }

    public build(): IServerConfiguration {
      return <IServerConfiguration> {
        max_connections: this.maxConnections,
      };
    }
  }

  export interface IServerConfiguration {
    max_connections: number;
  }
