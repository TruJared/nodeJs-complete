const express = require('express');
const path = require('path');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/add-chore', (req, res) => {
  res.sendFile(path.join(rootDir, 'views', 'add-chore.html'));
});

router.post('/add-chore', (req, res) => {
  console.log(req.body);
  res.redirect('/');
});

module.exports = router;
