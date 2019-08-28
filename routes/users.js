const express = require('express');
const router = express.Router();
const db = require('../config/database');
const User = require('../models/User');
const bodyParser = require('body-parser');



router.get('/', (request,response)=>
User.findAll()
    .then(users=>{
        response.json(users);
    })
    .catch((error)=>{
        response.send("Error: "+ err)
        })
        
);


module.exports = router;