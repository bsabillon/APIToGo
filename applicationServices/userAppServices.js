
const User = require('../models/User');
const Card = require('../models/Card');
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
   




}

module.exports= userMethods;