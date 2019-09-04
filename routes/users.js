const express = require('express');
const router = express.Router();
const methods = require('../applicationServices/registrationAppServices');


router.get('/getByEmail/:email?', methods.getUserByEmail);
router.post('/add',methods.addUser);

module.exports = router;