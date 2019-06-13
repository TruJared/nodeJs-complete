const choresList = [];

const getAddChorePage = (req, res) => {
  res.render('add-chore', { pageTitle: 'Add Chore' });
};

const addChore = (req, res) => {
  choresList.push(req.body);
  console.log(req.body);
  res.redirect('/');
};

const getChores = (req, res) => {
  res.render('chores', {
    choresList,
  });
};

module.exports = {
  getChores,
  getAddChorePage,
  addChore,
  choresList,
};
