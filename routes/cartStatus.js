const express = require('express');
const router = express.Router();
const db = require('../config/database');
const CartStatus = require('../models/CartStatus');
const bodyParser = require('body-parser');



router.get('/', (request,response)=>
CartStatus.findAll()
    .then(cartStatus=>{
        response.json(cartStatus);
    })
    .catch((error)=>{
        response.send("Error: "+ err)
        })
        
);

router.post('/add',(request,response)=>{   

    CartStatus.create(
        request.body
     )
     .then(cartStatus=>{
        response
        .status(200)
        .json('{"cartStatus added successfully"}');
        })
     .catch(error=>
        response.send(error));
    }
    
);




module.exports = router;