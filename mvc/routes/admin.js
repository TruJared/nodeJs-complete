const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');

const { getAddProduct, postAddProduct } = require('../controllers/products');

const router = express.Router();

router.get('/add-product', getAddProduct);
router.post('/add-product', postAddProduct);

module.exports = { adminRoutes: router };
