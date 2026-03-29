const get404 = (req, res, next) => {
  const err = new Error("Page not found");
  err.status = 404;
  next(err);
};

const handleError = (err, req, res, next) => {
  const statusCode = err.status || 500;
  res.status(statusCode).render("error", {
    message: err.message,
    status: statusCode,
  });
};

module.exports = { get404, handleError };
