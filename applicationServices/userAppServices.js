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

    getCarts: function(request, response){
        Cart.findAll()
            .then(cart=>{
                response.json(cart);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
            
    },

    getPendingCartIdByUserEmail: function(request, response){
        Cart.findAll({
            attributes:['id'],
            where:{
                userEmail: request.params.userEmail,
                cartStatusId: 1
            }
        })
            .then(cart=>{
                response.json(cart);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
            
    },

    addAddressCard: function(request,response){
        Cart.update(
            {addressId: request.params.addressId, cardId: request.params.cardId},
            {where: request.params.cartId }
        )
        .then(cart=>{
            response
            .status(200)
            .send('Cart updated successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))
    },

   
    getProductCountByCartId: function(request, response){
        CartDetails.findAll({
            attributes:[[sequelize.fn('COUNT', sequelize.col('id')),'productCount']],
            where:{
                cartId: request.params.cartId                
            }
        })
            .then(cart=>{
                response.json(cart);
            })
            .catch((error)=>{
                response.send("Error: "+ error)
                })
            
    },

    addProductToCart: function(request, response){
        CartDetails.create(request.body)
            .then(cartDetails=>{
                response
                .status(200)
                .send('Product added successfully');
                })
            .catch(error=>
                response.send("Error: "+ error))
    },

    removeProductFromCart: function(request,response){
        CartDetails.destroy({
            where:{
                id: request.params.cartDetailsId
            }
        })
        .then(cartDetails=>{
            response
            .status(200)
            .send('product removed from cart successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))

    },

    updateProductQuantityFromCart: function(request,response){
        CartDetails.update(
            {cartQuantity: request.params.cartQuantity},
            {where: request.params.cartDetailsId }
        )
        .then(cartDetails=>{
            response
            .status(200)
            .send('Quantity updated successfully');
        })
        .catch(error=>
            response.send("Error: "+ error))
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