const express = require('express');
const router = express.Router();
const db = require('../config/database');
const CartDetails = require('../models/CartDetail');
const bodyParser = require('body-parser');



router.get('/', (request,response)=>
CartDetails.findAll()
    .then(cartDetails=>{
        response.json(cartDetails);
    })
    .catch((error)=>{
        response.send("Error: "+ err)
        })
        
);

router.post('/add',(request,response)=>{   

    CartDetails.create(
        request.body
     )
     .then(cartDetails=>{
        response
        .status(200)
        .json('{"cartDetails added successfully"}');
        })
     .catch(error=>
        response.send(error));
    }
    
);




module.exports = router;