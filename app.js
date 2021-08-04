// Node.js modules
// const http = require('http');
const path = require('path');

// Third party modules
const express = require('express');

const errorController = require('./controllers/error');

// Own Modules
const adminRoutes = require('./routes/admin');
const rootRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoutes);
app.use(rootRoutes);

app.use(errorController.get404Page);

app.listen(3000); // This create a server and listen, at the same time
