const errorHandler = (err, req, res, next) => {
  if (!err) {
    console.error("Unknown error occurred");
    return res.status(500).json({
      message: "Unknown error occurred",
      path: req.originalUrl,
      method: req.method,
    });
  }

  console.error(err.stack || "No stack trace available");
  res.status(err.statusCode || 500).json({
    message: err.message || "Internal server error",
    path: req.originalUrl,
    method: req.method,
  });
};

export default errorHandler;
