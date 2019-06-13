const express = require('express');

const router = express.Router();

const { getAddChorePage, addChore, choreList } = require('../controllers/choresController');

//  TODO add custom path  //

router.get('/add-chore', getAddChorePage);

router.post('/add-chore', addChore);

module.exports = {
  adminRoutes: router,
  choreList,
};
