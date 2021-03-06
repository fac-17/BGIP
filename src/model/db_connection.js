//import pool
const pg = require("pg");
const Pool = pg.Pool;

//import url
const url = require("url");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}

let DATABASE_URL = process.env.DATABASE_URL;
if (!DATABASE_URL) throw new Error("Environment variable must be set");
const params = url.parse(DATABASE_URL);
const [username, password] = params.auth.split(":");

const options = {
  host: params.hostname,
  port: params.port,
  database: params.pathname.split("/")[1],
  max: process.env.DATABASE_MAX_CONNECTIONS || 2,
  user: username,
  password,
  ssl: params.hostname != "localhost"
};

module.exports = new Pool(options);
