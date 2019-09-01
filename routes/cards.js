const express = require('express');
const router = express.Router();
const Card = require('../models/Card');
const userMethods = require('../applicationServices/userAppServices');


router.post('/add',userMethods.addCard);
router.get('/', userMethods.getCards);
router.get('/getByUserEmail/:userEmail?', userMethods.getCardsByUserEmail);
router.delete('/deleteCard/:cardId?',userMethods.deleteCard);


module.exports = router;