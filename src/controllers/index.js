
const express = require("express");
//const path = require("path");
const router = express.Router();

//import home route controller
const home = require("./home");
//const quotes = require("./quotes");

//const error = require("./error");

//add home route
router.get("/", home.get);
//router.get("/quotes", quotes.get);
//router.use(error.client);
//router.use(error.server);

//From Reuben needs review
// const express = require('express');
// const router = express.Router();


// //res.render('view', { title: 'my other page', layout: 'other' });

module.exports = router;
