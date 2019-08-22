exports.get = (req, res) => {
  res.render("home", { title: "Home", cssPath: "css/styleHome.css" });
};
