const Seller = require('../models/Seller');
const Store = require('../models/Store');
const Product = require('../models/Product');
const ProductCategory = require('../models/ProductCategory');
const bodyParser = require('body-parser');
const domainMethods = require('../domainServices/sellerDomainServices');

var sellerMethods = {

    addSeller: function(request, response){
        Seller.create(request.body)
            .then(seller=>{
                response
                .status(200)
                .send('seller added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getSellers: function(request, response){
        Seller.findAll()
            .then(seller=>{
                response.json(seller);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
            
    },

    getSellerById: function(request, response){
        Seller.findOne({
            where: {
                id: request.params.sellerId
              } 
        })
        .then(sellers=>{
            response.json(sellers);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },
   

    addStore: function(request, response){
        Store.create(request.body)
            .then(store=>{
                response
                .status(200)
                .send('store added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getStores: function(request, response){
        Store.findAll({
            include: [{
                model:Product
            }]
        })
            .then(store=>{
                response.json(store);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
            
    },

    getStoreById: function(request, response){
        Store.findOne({
            where: {
                id: request.params.storeId
              } 
        })
        .then(store=>{
            response.json(store);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

    getStoreBySellerId: function(request, response){
        Store.findAll({
            where: {
                sellerId: request.params.sellerId
              } 
        })
        .then(store=>{
            response.json(store);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
        
    },

    
    addProduct: function(request, response){
        Product.create(request.body)
            .then(product=>{
                response
                .status(200)
                .send('product added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },
    
    getProducts: function(request, response){
        Product.findAll()
            .then(product=>{
                response.json(product);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
            
    },

    getProductById: function(request, response){
        Product.findOne({
            where: {
                id: request.params.productId
              } 
        })
        .then(product=>{
            response.json(product);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
    },

    getProductByCategoryId: function(request, response){
        Product.findAll({
            where: {
                productCategoryId: request.params.productCategoryId
              } 
        })
        .then(product=>{
            response.json(product);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
    },

    getProductByStoreId: function(request, response){
        Product.findAll({
            where: {
                storeId: request.params.storeId
              } 
        })
        .then(product=>{
            response.json(product);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })
    },

    deleteProductbyProductId: function(request,response){
        Product.destroy({
            where: {
                id: request.params.productId
              } 
        })
        .then(product=>{
            response
            .status(200)
            .send('product removed successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))
    },




    getCategories: function(request, response){
        ProductCategory.findAll()
            .then(productCategory=>{
                response.json(productCategory);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
            
    },
    
    addCategory: function(request, response){
        ProductCategory.create(request.body)
            .then(productCategory=>{
                response
                .status(200)
                .send('product added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },


}

module.exports= sellerMethods;