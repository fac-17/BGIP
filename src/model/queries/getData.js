const db_connection = require("../db_connection");

const getQuotes = (category, cb) => {
  db_connection.query(
    `SELECT * FROM quotes WHERE $1 = category`,
    [category],
    (err, result) => {
      if (err) return cb(err);
      cb(null, result);
    }
  );
};

module.exports = getQuotes;
