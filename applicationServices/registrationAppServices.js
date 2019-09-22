const express = require('express');
const Teacher = require('../models/Teacher');
const User = require('../models/User');
const bodyParser = require('body-parser');
const domainMethods = require('../domainServices/registrationDomainServices');

var methods = {
    
    getUserByEmail: function(request, response){
        User.findAll({
            where: {
                userEmail: request.params.email
              } 
        })
        .then(users=>{
            response.json(users);
        })
        .catch((error)=>{
            response.send("Error: "+ err)
            })
        
    },

    addUser: function(request, response){
        User.create(
            request.body
         )
         .then(user=>{
            response
            .status(200)
            .send('user added successfully');
            })
         .catch(error=>
            response.send("Error: "+ error))
    }


}

module.exports= methods;