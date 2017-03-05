import {
  ArcServer,
  ServerConfigurationBuilder,
} from "libarc/lib/server";

// Build server configuration
const conf = new ServerConfigurationBuilder()
  .max_connections(128)
  .host("127.0.0.1")
  .build();

// Create server
const server = new ArcServer(conf);
server.listen();
