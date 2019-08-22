const express = require("express");
//const path = require("path");
const router = express.Router();

//import home route controller
const home = require("./home");
const quotes = require("./quotes");
console.log(quotes);
const error = require("./error");

//add home route
router.get("/", home.get);
router.post("/submitquote", quotes.post);
router.get(/quotes/, quotes.get);
//* matches any number of characters
router.use(error.client);
router.use(error.server);

module.exports = router;
