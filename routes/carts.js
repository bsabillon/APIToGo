const express = require('express');
const router = express.Router();
const userMethods = require('../applicationServices/userAppServices');



router.post('/add',userMethods.addCart);
router.get('/', userMethods.getCarts);
router.get('/cartIdByUserEmail/:userEmail?', userMethods.getPendingCartIdByUserEmail);
//router.put('/updateCart/:cartId/:/addressId?/:cardId?',userMethods.addAddressCard);
//router.put('/updateCartStatus/:cartId/:cartStatusId?',userMethods.updateCartStatus);




module.exports = router;