const rateLimiter = require('express-rate-limit');

const limiter = rateLimiter({
  windowMs: 60 * 10 * 1000,
  max: 100,
});

module.exports = limiter;
