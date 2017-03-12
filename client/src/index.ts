import {
  ArcClient,
} from "libarc/lib/client";

// Get rid of security measures.
// Works around an issue with self-signed certs.
// DO NOT DO THIS IN AN PRODUCTION ENVIRONMENT!
process.env.NODE_TLS_REJECT_UNAUTHORIZED = "0";

// Create client
const client = new ArcClient();
client.connect("wss://127.0.0.1:52000/arc");
