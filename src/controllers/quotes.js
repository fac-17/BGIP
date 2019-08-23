const url = require("url");
const path = require("path");
const getData = require("../model/queries/getData");
const postData = require("../model/queries/postData");
const express = require("express");

exports.post = (req, response) => {
  const { category, quote, author, keyword } = req.body;
  postData(category, quote, author, keyword, (err, res) => {
    if (err) console.log(err);
    else{
      //redirect to endpoint with category as a query string
      response.redirect(`/quotes/category/${category}`)
    }
  });
};

exports.getByCategory = (req,response) => {
  let category=req.params.category;
  getData.getQuotes(category, (err, res) => {
    if (err) console.log(err);
    response.render("quotes", { title: "quotes", cssPath: "/css/styleQuotes.css", categoryQuotes: res.rows });
  });
}

exports.getByKeyword = (req, response) => {
  let keyword=req.params.keyword;
  getData.getKeywordQuotes(keyword, (err, res) => {
    if(err) console.log(err); //500 page should render here
    response.render("quotes", { title: "quotes", cssPath: "/css/styleQuotes.css", categoryQuotes: res.rows });//rename to quotes alone
  });
}