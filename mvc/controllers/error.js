const products = [];

exports.get404 = (req, res) => {
  res.render('404', { pageTitle: '4💩4' });
};
