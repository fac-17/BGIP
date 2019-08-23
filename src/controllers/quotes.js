const getData = require("../model/queries/getData");
const postData = require("../model/queries/postData");

exports.post = (req, response) => {
  const { category, quote, author, keyword } = req.body;
  postData(category, quote, author, keyword, (err, res) => {
    if (err) console.log(err);
    else {
      //redirect to endpoint with category as a query string
      response.redirect(`/quotes/category/${category}`);
    }
  });
};

exports.getByCategory = (req, response) => {
  let category = req.params.category;
  getData.getQuotes(category, (err, res) => {
    if (err) console.log(err);
    response.render("quotes", {
      title: "quotes",
      cssPath: "/css/styleQuotes.css",
      categoryQuotes: res.rows
    });
  });
};
