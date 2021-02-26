const mysql = require("mysql2"),
  config = require("../config/env");

const db = mysql.createConnection({
  host: config.db_host,
  user: config.db_user,
  database: config.db_name,
  password: config.db_password,
  port: "8889",
});

module.exports = db;
