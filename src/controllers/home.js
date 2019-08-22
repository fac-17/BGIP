exports.get = (req, res) => {
  res.reder("home", { title: "Home", cssPath: "css/styleHome.css" });
};
