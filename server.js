const express = require('express');
const request = require('request-promise');
const dotenv = require('dotenv');
const helmet = require('helmet');
const hpp = require('hpp');
const xss = require('xss-clean');
const morgan = require('morgan');
const mongoSanitize = require('express-mongo-sanitize');
// Init app.
const app = express();
dotenv.config({ path: './config/env.env' });

// Custom Modules.
const limiter = require('./middlewares/limitRequest');
const errorHandler = require('./middlewares/error');
const products = require('./routes/products');

// Middlewares.
app.use(hpp());
app.use(helmet());
app.use(xss());
app.use(mongoSanitize());
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Custom Middlewares.
app.use(limiter);
// Routes.
app.use('/api/v1/products', products);
app.use(errorHandler);

// Create Server.
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`Server Running on ${process.env.NODE_ENV} mode on ${PORT}`);
});
