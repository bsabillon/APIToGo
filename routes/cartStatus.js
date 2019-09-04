const express = require('express');
const router = express.Router();
const db = require('../config/database');
const CartStatus = require('../models/CartStatus');
const bodyParser = require('body-parser');




router.post('/add',userMethods.addCartStatus);
router.get('/', userMethods.getCartStatus);


module.exports = router;