require("dotenv").config();

module.exports = {
  app_port: process.env.APP_PORT,
  db_host: process.env.DB_HOST,
  db_user: process.env.DB_USER,
  db_password: process.env.DB_PASSWORD,
  db_name: process.env.DB_NAME,
};
