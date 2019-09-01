const express = require('express');
const router = express.Router();
const sellerMethods = require('../applicationServices/sellerAppServices');

router.post('/add',sellerMethods.addSeller);
router.get('/', sellerMethods.getSellers);
router.get('/getById/:sellerId?', sellerMethods.getSellerById);


module.exports = router;