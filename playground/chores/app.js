const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const choreRoute = require('./routes/chores');
const adminRoute = require('./routes/admin');

const app = express();

// enable body parser
app.use(bodyParser.urlencoded({ extended: true }));
// set up static files
app.use(express.static(path.join(__dirname, 'public')));

// routes for sub pages //
app.use('/admin', adminRoute);

// default route //
app.use(choreRoute);

//*  404  *//
app.use('/', (req, res) => res.status(404).sendFile(path.join(__dirname, 'views', '404.html')));

app.listen(1234, () => console.log('server started on 1234'));
