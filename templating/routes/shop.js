const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');

const router = express.Router();

const { products } = require('./admin');

router.get('/', (req, res) => {
  res.render('shop', { products, pageTitle: 'shop', path: '/' });
});

module.exports = router;
