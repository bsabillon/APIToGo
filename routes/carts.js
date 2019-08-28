const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Cart = require('../models/Cart');
const bodyParser = require('body-parser');



router.get('/', (request,response)=>
Cart.findAll()
    .then(cart=>{
        response.json(cart);
    })
    .catch((error)=>{
        response.send("Error: "+ err)
        })
        
);

router.post('/add',(request,response)=>{   

    Cart.create(
        request.body
     )
     .then(cart=>{
        response
        .status(200)
        .json('{"cart added successfully"}');
        })
     .catch(error=>
        response.send(error));
    }
    
);




module.exports = router;