const path = require('path');

const express = require('express');

const shopController = require('../controllers/shop');

const router = express.Router();

// router.use() compares is the path CONTAINS '/' while .get() compares is the path is EXACTLY '/'
router.get('/', shopController.getIndex);

router.get('/products', shopController.getProducts);

router.get('/cart', shopController.getCart);router.get('/cart', shopController.getCart);

router.get('/orders', shopController.getOrders);

router.get('/checkout', shopController.getCheckout);

module.exports = router;
