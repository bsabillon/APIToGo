const express = require('express');
const router = express.Router();
const userMethods = require('../applicationServices/userAppServices');


router.get('/productCountByCartId/:cartId?', userMethods.getProductCountByCartId);
router.post('/add', userMethods.addProductToCart);
router.delete('/removeFromCart/:cartDetailsId?',userMethods.removeProductFromCart);
router.put('/updateQuantity/:cartDetailsId?/:cartQuantity?',userMethods.updateProductQuantityFromCart);








module.exports = router;