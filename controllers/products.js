const asyncHandler = require('../middlewares/async');

exports.getProducts = asyncHandler(async (req, res, next) => {
  res.status(200).json({ success: true, data: 'Get Products' });
});
