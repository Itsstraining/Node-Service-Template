const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const server = express();

/// MIDDLEWARE ZONE
server.use(cors);
server.use(bodyParser.json());
server.use(require("./middleware/sample.middleware"));
/// END OF MIDDLEWARE ZONE

/// ROUTERS ZONE
server.use("sample", require("./routers/sample.route"));
/// END OF ROUTERS ZONE

module.exports = server;
