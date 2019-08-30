const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Teacher = require('../models/Teacher');
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
        domainMethods.validateReputation(request.body)
        .then(  
            Teacher.create(
                request.body
             )
             .then(teacher=>{
                response
                .status(200)
                .send('teacher added successfully');
                })
             .catch(error=>
                response.send("Error: "+ error))
        )
        .catch(error=>{
           response.send("Error: "+ error)     
            })
    }

}

module.exports= methods;