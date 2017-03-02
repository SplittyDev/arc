"use strict";
const server_1 = require("../../libarc/src/server");
const conf = new server_1.ServerConfigurationBuilder()
    .max_connections(128)
    .build();
const server = new server_1.ArcServer(conf);
server.listen();
