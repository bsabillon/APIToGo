const Card = require('../models/Card');
const CartStatus = require('../models/CartStatus');
const Cart = require('../models/Cart');
const Address = require('../models/Address');
const ProductCategory = require('../models/ProductCategory');
const bodyParser = require('body-parser');
const domainMethods = require('../domainServices/sellerDomainServices');

var userMethods = {

    addCard: function(request, response){
        Card.create(request.body)
            .then(card=>{
                response
                .status(200)
                .send('card added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getCards: function(request, response){
        Card.findAll()
            .then(card=>{
                response.json(card);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
            
    },

    getCardsByUserEmail: function(request, response){
        Card.findAll({
            where: {
                userEmail: request.params.userEmail
              } 
        })
        .then(cards=>{
            response.json(cards);
        })
        .catch((error)=>{
            response.send("Error: "+ error)
            })        
    },

    deleteCard: function(request,response){
        Card.destroy({
            where:{
                id: request.params.cardId
            }
        })
        .then(card=>{
            response
            .status(200)
            .send('card deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },
   

    addCartStatus: function(request, response){
        CartStatus.create(request.body)
            .then(cartStatus=>{
                response
                .status(200)
                .send('cartStatus added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getCartStatus: function(request, response){
        CartStatus.findAll()
            .then(cartStatus=>{
                response.json(cartStatus);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
            
    },

    
    addCart: function(request, response){
        Cart.create(request.body)
            .then(cart=>{
                response
                .status(200)
                .send('cart added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getCart: function(request, response){
        Cart.findAll()
            .then(cart=>{
                response.json(cart);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
            
    },


    addAddress: function(request, response){
        Address.create(request.body)
            .then(address=>{
                response
                .status(200)
                .send('address added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    getAddressByUserEmail: function(request, response){
        Address.findAll(
            {
                where: {
                    userEmail: request.params.userEmail
                  } 
            }
        )
            .then(address=>{
                response.json(address);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
            
    },

    deleteAddress: function(request,response){
        Address.destroy({
            where:{
                id: request.params.AddressId
            }
        })
        .then(address=>{
            response
            .status(200)
            .send('address deleted successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },
    
}

module.exports= userMethods;