const products = [];

const getAddProduct = (req, res) => {
  res.render('add-product', {
    pageTitle: 'add products',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

const postAddProduct = (req, res) => {
  products.push({ title: req.body.title });
  res.redirect('/');
};

const getProducts = (req, res) => {
  res.render('shop', {
    products,
    pageTitle: 'shop',
    path: '/',
    hasProducts: products.length > 0,
    activeShop: true,
    productCSS: true,
  });
};

module.exports = {
  getAddProduct,
  postAddProduct,
  getProducts,
};
