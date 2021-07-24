const express = require('express');

const router = express.Router();

const { getProducts } = require('../controllers/products');

router.route('/').get(getProducts);

module.exports = router;
