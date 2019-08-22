const runBuild = require("./db_build");
runBuild((err, res) => {
  if (err) console.log("Database not created", err);
  console.log("DATABASE CREATED", res);
});
