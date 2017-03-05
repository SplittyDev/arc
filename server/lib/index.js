"use strict";
const server_1 = require("libarc/lib/server");
const conf = new server_1.ServerConfigurationBuilder()
    .max_connections(128)
    .host("127.0.0.1")
    .build();
const server = new server_1.ArcServer(conf);
server.listen();
