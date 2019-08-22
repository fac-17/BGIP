const url = require("url");
const path = require("path");
const getData = require("../model/queries/getData");
const postData = require("../model/queries/postData");

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
  });

  getData(category.toLowerCase(), (err, res) => {
    if (err) console.log(err);
    console.log(res.rows);
    response.render("quotes", { categoryQuotes: res.rows });
  });
};
