const express = require('express');
const router = express.Router();




router.post('/add',userMethods.addAddress);
router.get('/', userMethods.getAddresses);


module.exports = router;