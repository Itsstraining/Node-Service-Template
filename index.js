const server = require("./src/server");
const config = require("./config");
require("./src/db").instance;

server.listen(config.PORT, config.HOST, () => {
  console.log(`Server is running on ${config.HOST}:${config.PORT}`);
});
