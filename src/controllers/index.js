const express = require('express');
const router = express.Router();

// add home route
router.get('/', (req,res) => {
  res.render("home", {title:"Home",cssPath:"/css/styleHome.css"})
});

router.get('/quotes', (req,res) => {
  res.render("quotes", {title:"Quotes",cssPath:"/css/styleQuotes.css"})
});
//res.render('view', { title: 'my other page', layout: 'other' });
module.exports = router;
