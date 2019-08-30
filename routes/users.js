const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');
const bodyParser = require('body-parser');



router.get('/user/:email', (request,response)=>
    getUserByEmail('${request.params.email}')
        
);


module.exports = router;