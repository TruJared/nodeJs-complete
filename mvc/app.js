const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const { adminRoutes } = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const { get404 } = require('./controllers/error.js');

const app = express();

// template engine
app.set('view engine', 'pug');
app.set('views', 'views');

// use body parser
app.use(bodyParser.urlencoded({ extended: true }));
// serve static
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(shopRoutes);
// 404
app.use('/', get404);

app.listen(3000, () => console.log('server now listening on 3000'));
