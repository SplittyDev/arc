import {
  ArcServer,
  ServerConfigurationBuilder,
} from "../../libarc/src/server";

// Build server configuration
const conf = new ServerConfigurationBuilder()
  .max_connections(128)
  .build();

// Create server
const server = new ArcServer(conf);
server.listen();
