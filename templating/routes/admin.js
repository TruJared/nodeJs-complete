const express = require('express');
// const path = require('path');
// const rootDir = require('../util/path');

const router = express.Router();

const products = [];

router.get('/add-product', (req, res) => {
  res.render('add-product', { pageTitle: 'add products', path: '/admin/add-product' });
});

router.post('/add-product', (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
});
module.exports = { adminRoutes: router, products };
