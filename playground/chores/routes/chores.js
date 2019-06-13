const express = require('express');

const router = express.Router();

const { getChores } = require('../controllers/choresController');

router.get('/', getChores);

module.exports = router;
