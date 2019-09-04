const express = require('express');
const router = express.Router();
const userMethods = require('../applicationServices/userAppServices');



router.post('/add',userMethods.addCart);
router.get('/', userMethods.getCart);


module.exports = router;