const express = require('express');
const router = express.Router();
const methods = require('../applicationServices/registrationAppServices');


router.get('/getById/:email?', methods.getUserByEmail);
router.post('/add',methods.addUser);

module.exports = router;