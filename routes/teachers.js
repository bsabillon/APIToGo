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
        
);

router.post('/add',(request,response)=>{   

    let{teacherName,teacherLastname,teacherEmail,teacherAddress,teacherPictureURL,teacherReputation}=request.body;

    if(teacherName==null){
        console.log('teacherName is NULL');
        return response.json('error');
    }
else{
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

}
    
);

module.exports = router;