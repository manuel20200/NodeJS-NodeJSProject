const path = require('path');

const express = require('express');

const rootDir = require('../util/path');
const adminData = require('./admin');

const router = express.Router();

router.get((req, res, next) => {
    console.log('First Middleware');
    next(); // Allows the request to continue to the next middleware in line
});

// router.use() compares is the path CONTAINS '/' while .get() compares is the path is EXACTLY '/'
router.get('/', (req, res, next) => {
    console.log('In another middleware');
    console.log(adminData.products);
    // res.send('<h1>Hello from Express!</h1>');
    // res.sendFile(path.join(__dirname, '../', 'views', 'shop.html'));   // __dirname => copy the path of the actual file shop.js
    // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
    const products = adminData.products;
    res.render('shop', {
        prods: products, 
        pageTitle: 'Shop', 
        path: '/', 
        hasProducts: products.length > 0,
        activeShop: true,
        productCSS: true,
        // layout: false // Doesnt use the layout
    });
});

module.exports = router;
