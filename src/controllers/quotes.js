const url = require("url");
const path = require("path");
const getData = require("../model/queries/getData");
const postData = require("../model/queries/postData");
const express = require("express");

// exports.get = (req, response) => {
//   const category = req.url.split("/")[1];
//   getData(category.toLowerCase(), (err, res) => {
//     if (err) console.log(err);
//     if (res.rows.length == 0) {
//       response.render("error",  { title: "error"})
//     }else{
//         console.log(res.rows);
//         response.render('home', {categoryQuotes: res.rows})
//     }
//   })
// }

exports.post = (req, response) => {
  const { category, quote, author, keyword } = req.body;

  postData(category, quote, author, keyword, (err, res) => {
    if (err) console.log(err);
    else{
      //redirect to endpoint with category as a query string
      response.redirect(`/quotes/category/${category}`)
      // getData.getQuotes(category.toLowerCase(), (err, res) => {
      //   if (err) console.log(err);
      //   console.log(res.rows);
      //   response.render("quotes", { title: "Home", cssPath: "css/styleQuotes.css", categoryQuotes: res.rows });
      // });
    }
  });
};

exports.getByCategory = (req,response) => {
  console.log("redirection successful")
  let category=req.params.category;
  getData.getQuotes(category.toLowerCase(), (err, res) => {
    console.log('came into getData');
    if (err) console.log(err);
    console.log('about to render');
    response.render("quotes", { title: "quotes", cssPath: "css/styleQuotes.css", categoryQuotes: res.rows });
  });
}
