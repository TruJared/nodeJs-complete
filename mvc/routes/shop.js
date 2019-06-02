const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');

const { getProducts } = require('../controllers/products');

const router = express.Router();

router.get('/', getProducts);

module.exports = router;
