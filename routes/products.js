const express = require('express');
const router = express.Router();
const Product = require('../models/Product');
const sellerMethods = require('../applicationServices/sellerAppServices');


router.post('/add',sellerMethods.addProduct);
router.get('/', sellerMethods.getProducts);
router.get('/getById/:productId?', sellerMethods.getProductById);
router.get('/getByStoreId/:storeId?', sellerMethods.getProductByStoreId);
router.get('/getByCategoryId/:productCategoryId?', sellerMethods.getProductByCategoryId);
router.delete('/delete/:productId?', sellerMethods.deleteProductbyProductId);









module.exports = router;