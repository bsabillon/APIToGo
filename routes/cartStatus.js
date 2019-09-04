const express = require('express');
const router = express.Router();
const userMethods = require('../applicationServices/userAppServices');




router.post('/add',userMethods.addCartStatus);
router.get('/', userMethods.getCartStatus);


module.exports = router;