const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Store = require('../models/Store');
const bodyParser = require('body-parser');
const sellerMethods = require('../applicationServices/sellerAppServices');

router.post('/add',sellerMethods.addStore);
router.get('/', sellerMethods.getStores);
router.get('/getByStoreId/:storeId?', sellerMethods.getStoreById);
router.get('/getByStoreSellerId/:sellerId?', sellerMethods.getStoreBySellerId);




module.exports = router;