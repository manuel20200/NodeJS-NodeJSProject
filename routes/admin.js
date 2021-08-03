const path = require('path');

const express = require('express');

const rootDir = require('../util/path');

const router = express.Router();

const products = [];

// /admin/add-product => GET
router.get('/add-product', (req, res, next) => {
    console.log('In add-product middleware');
    // res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
    // res.sendFile(path.join(__dirname, '../', 'views', 'add-product.html'));
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
    res.render("add-product", {
        pageTitle: "Add Product", 
        path: "/admin/add-product",
        productCSS: true,
        formsCSS: true,
        activeAddProduct: true
    });
});

// /admin/add-product => POST
// filter by request app.get() and app.post(), it has the same utility as app.use(), app.delete() patch() put()
router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    products.push({title: req.body.title});
    res.redirect('/');
});

// module.exports = router;

exports.routes = router;
exports.products = products;