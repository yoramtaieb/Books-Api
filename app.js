const { app_port } = require("./config/env");
const app = require("./config/server");
config = require("./config/env");

app.listen(config.app_port, () => {
  console.log("server started");
});
