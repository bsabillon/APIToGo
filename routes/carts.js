const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Cart = require('../models/Cart');
const bodyParser = require('body-parser');



router.post('/add',userMethods.addCart);
router.get('/', userMethods.getCart);


module.exports = router;