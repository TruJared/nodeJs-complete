const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const choreRoute = require('./routes/chores');
const { adminRoutes } = require('./routes/admin');
const { get404 } = require('./controllers/errorController');

const app = express();

// template engine
app.set('view engine', 'pug');
app.set('views', 'views');

// enable body parser
app.use(bodyParser.urlencoded({ extended: true }));
// set up static files
app.use(express.static(path.join(__dirname, 'public')));

// routes for sub pages //
app.use('/admin', adminRoutes);

// default route //
app.use(choreRoute);

//*  404  *//
app.use('/', get404);

app.listen(1234, () => console.log('server started on 1234'));
