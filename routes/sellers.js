const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Seller = require('../models/Seller');
const bodyParser = require('body-parser');



router.get('/', (request,response)=>
Seller.findAll()
    .then(seller=>{
        response.json(seller);
    })
    .catch((error)=>{
        response.send("Error: "+ err)
        })
        
);

router.post('/add',(request,response)=>{   

    Seller.create(
        request.body
     )
     .then(seller=>{
        response
        .status(200)
        .json('{"Seller added successfully"}');
        })
     .catch(error=>
        response.send(error));
    }
    
);




module.exports = router;