const ErrorResponse = require('../helpers/errorResponse');

const errorHandler = (err, req, res, next) => {
  // Dev Error
  console.log(err);
  //   Api Errors.
  if (err.name === 'ValidationError') {
    const message = Object.values(err.errors).map((val) => val.message);
    err = new ErrorResponse(message, 400);
  }

  res
    .status(err.statusCode || 500)
    .json({ success: false, data: err.message || 'Server Error' });
};

module.exports = errorHandler;
