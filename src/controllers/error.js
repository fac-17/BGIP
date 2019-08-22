exports.client = (err,req, res, next) => {
  res.status(404).render("error", {
    title: "404",
    cssPath: "/css/error.css",
    layout: "error",
    statusCode: 404,
    errorMessage: "Page not found",
    src: "https://media.giphy.com/media/13d2jHlSlxklVe/giphy.gif"
  });
};

exports.server = (err,req,res,next) => {
  res.status(500).render("error", {
    title: "500",
    cssPath: "/css/error.css",
    layout: "error",
    statusCode: 500,
    errorMessage: "Oops, Something went wrong! Don't worry, we're working on it!",
    src: "https://media.giphy.com/media/ChpOyeacGmpQk/giphy.gif"
  })
}
