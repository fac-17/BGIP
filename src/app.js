const express = require("express");
const path = require("path");
const favicon = require("serve-favicon");
const handlebars = require("express-handlebars");

const controllers = require("./controllers");

const app = express();

//set up view engine
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.engine(
  "hbs",
  handlebars({
    extname: "hbs",
    layoutsDir: path.join(__dirname, "views", "layouts"),
    partialsDir: path.join(__dirname, "views", "partials"),
    defaultLayout: "main"
  })
);

app.set("port", process.env.PORT || 3000);
app.use(favicon(path.join(__dirname, "..", "public", "favicon.ico")));
app.use(express.static(path.join(__dirname, "..", "public")));
// app.use(controllers);

module.exports = app;
