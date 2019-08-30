const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Teacher = require('../models/Teacher');
const bodyParser = require('body-parser');

var domainMethods = {
    validateReputation: function(teacher){
        
        ok = true;
        console.log(teacher.teacherName);
        
        let promise = new Promise(function(resolve, reject) {
           
            if(parseInt(teacher.teacherReputation) <= 100 ){
                resolve("Done")
            }else{
                reject("fuuck gaballo")
            }
            

        });

        return promise;
    },

    

}

module.exports= domainMethods;