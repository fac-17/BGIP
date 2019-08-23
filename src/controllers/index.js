const express = require("express");
//const path = require("path");
const router = express.Router();

//import home route controller
const home = require("./home");
const quotes = require("./quotes");
console.log(quotes);
const error = require("./error");

//middleware to redirect when searching by category
router.use("/quotes/searchcategory",(req,res) => {
  res.redirect(`/quotes/category/${req.body.category}`)
})
router.get("/", home.get);
router.post("/submitquote", quotes.post);
router.get("/quotes/category/:category", quotes.getByCategory);


//* matches any number of characters
router.use(error.client);
router.use(error.server);

module.exports = router;
