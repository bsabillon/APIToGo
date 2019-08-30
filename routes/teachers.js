const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Teacher = require('../models/Teacher');
const bodyParser = require('body-parser');

router.get('/', (request,response)=>
Teacher.findAll()
    .then(teachers=>{
        response.json(teachers);
    })
    .catch((error)=>{
        response.send("Error: "+ err)
        })
        .console.log(teachers)
 );

router.post('/add',(request,response)=>{   
    
    Teacher.create(
        request.body
     )
     .then(teacher=>{
        response
        .status(200)
        .json('{"teacher added successfully"}');
        })
     .catch(error=>
        response.send(error));
    }
    
);

module.exports = router;