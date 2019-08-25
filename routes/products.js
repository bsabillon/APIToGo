const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Product = require('../models/Product');


router.get('/', (req,res)=>
Product.findAll({
    attributes: ['productId', 'productDescription', 'price',
                 'productQuantity','productPictureURL','productCategoryId']
})
    .then(products=>{
        console.log(products);
        res.sendStatus(200);
    })
    .catch(err=>console.log(err)));

module.exports = router;