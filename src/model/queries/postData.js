const db_connection = require("../db_connection");

const postQuote = (category, quote, quotee, keyword, cb) => {
  db_connection.query(
    "INSERT INTO quotes(category, quote, quotee, keyword) VALUES ($1, $2, $3, $4)",
    [category, quote, quotee, keyword],
    (err, res) => {
      if (err) return cb(err);
      cb(null, res);
    }
  );
};

module.exports = postQuote;
