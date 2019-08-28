const express = require('express');
const router = express.Router();
const db = require('../config/database');
const ProductCategory = require('../models/ProductCategory');
const bodyParser = require('body-parser');



router.get('/', (request,response)=>
ProductCategory.findAll()
    .then(productCategory=>{
        response.json(productCategory);
    })
    .catch((error)=>{
        response.send("Error: "+ err)
        })
        
);

router.post('/add',(request,response)=>{   

    ProductCategory.create(
        request.body
     )
     .then(productCategory=>{
        response
        .status(200)
        .json('{"ProductCategory added successfully"}');
        })
     .catch(error=>
        response.send(error));
    }
    
);




module.exports = router;