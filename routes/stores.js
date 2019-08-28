const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Store = require('../models/Store');
const bodyParser = require('body-parser');



router.get('/', (request,response)=>
Store.findAll()
    .then(store=>{
        response.json(store);
    })
    .catch((error)=>{
        response.send("Error: "+ err)
        })
        
);

router.post('/add',(request,response)=>{   

    Store.create(
        request.body
     )
     .then(store=>{
        response
        .status(200)
        .json('{"Store added successfully"}');
        })
     .catch(error=>
        response.send(error));
    }
    
);




module.exports = router;