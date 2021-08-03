// Node.js modules
// const http = require('http');
const path = require('path');

// Third party modules
const express = require('express');
// const bodyParser = require('body-parser');
const expressHbs = require('express-handlebars');

// Own Modules
const adminData = require('./routes/admin');
const rootRoutes = require('./routes/shop');

const app = express();

// Handlebars
/* app.engine(
    'handlebars', 
    expressHbs({
        layoutsDir: 'views/layouts/', 
        defaultLayout: 'main-layout',
        extname: 'handlebars'
    })); */

// app.set('view engine', 'pug');
// app.set('view engine', 'handlebars');
app.set('view engine', 'ejs');
app.set('views', 'views');

// app.use(bodyParser.urlencoded({extended: false}));
app.use(express.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminData.routes);
app.use(rootRoutes);

app.use((req, res, next) => {
    // res.status(404).send('<h1>Page Not Found!!</h1>');
    // res.status(404).sendFile(path.join(__dirname, 'views', 'pageNotFound.html'));
    res.status(404).render("pageNotFound", {pageTitle: 'Page Not Found'});
});

// const server = http.createServer(app);
// server.listen(3000);
app.listen(3000); // This create a server and listen, at the same time
