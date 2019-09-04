const express = require('express');
const router = express.Router();
const userMethods = require('../applicationServices/userAppServices');


router.post('/add',userMethods.addAddress);
router.get('/getByUserEmail/:userEmail?', userMethods.getAddressByUserEmail);
router.delete('/deleteAddress/:addressId?',userMethods.deleteAddress);



module.exports = router;