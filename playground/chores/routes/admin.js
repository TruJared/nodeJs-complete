const express = require('express');

const router = express.Router();

const choreList = [];

//  TODO add custom path  //

router.get('/add-chore', (req, res) => {
  res.render('add-chore');
});

router.post('/add-chore', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = {
  adminRoutes: router,
  choreList,
};
