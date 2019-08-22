const db_connection = require("../db_connection");

const postQuote = (category, quote, author, keyword, cb) => {
  db_connection.query(
    "INSERT INTO quotes(category, quote, author, keyword) VALUES ($1, $2, $3, $4)",
    [category, quote, author, keyword],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postQuote;
