const express = require('express');
const router = express.Router();
const db = require('../config/database');
const ProductCategory = require('../models/ProductCategory');
const bodyParser = require('body-parser');


router.post('/add',sellerMethods.addCategory);
router.get('/', sellerMethods.getCategories);



module.exports = router;