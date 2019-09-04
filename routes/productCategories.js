const express = require('express');
const router = express.Router();
const sellerMethods = require('../applicationServices/sellerAppServices');


router.post('/add',sellerMethods.addCategory);
router.get('/', sellerMethods.getCategories);



module.exports = router;