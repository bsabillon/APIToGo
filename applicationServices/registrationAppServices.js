const express = require('express');
const Teacher = require('../models/Teacher');
const User = require('../models/User');
const bodyParser = require('body-parser');
const domainMethods = require('../domainServices/registrationDomainServices');

var methods = {
    getTeachers: function(request, response){
        Teacher.findAll()
        .then(teachers=>{
            response.json(teachers);
        })
        .catch((error)=>{
            response.send("Error: "+ err)
            })
        
    },

    addTeacher: function(request, response){
        domainMethods.isReputationValid(request.body)
        .then( onResolved =>
            Teacher.create(
                request.body
             )
             .then(teacher=>{
                response
                .status(200)
                .send('teacher added successfully');
                })
             .catch(error=>
                response.send("Error adding: "+ error))
        )
        .catch(onError =>
            response.send("Error: "+ onError)
        )  
    },

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