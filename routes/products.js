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

router.get('/add',(req,res)=>{ 
    const data={
        productDescription: 'GamePad' ,
        price: 10,
        productQuantity: 12,
        productPictureURL: null,
        productCategoryId: 1,
    }

    let {productDescription,price,productQuantity,productPictureURL,productCategoryId} = data;

     Product.create({
        attributes: ['productId', 'productDescription', 'price',
        'productQuantity','productPictureURL','productCategoryId'],
        productDescription,
        price,
        productQuantity,
        productPictureURL,
        productCategoryId, 
     }) 
     .then(product=>res.redirect('/products'))
     .catch(err=>console.log(err)); 
});