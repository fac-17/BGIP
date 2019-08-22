exports.client = (req, res) => {
  res.status(404).render("error", {
    title: "404",
    cssPath: "/css/404.css",
    layout: "error",
    statusCode: 404,
    errorMessage: "Page not found",
    src: "https://media.giphy.com/media/13d2jHlSlxklVe/giphy.gif"
  });
};
