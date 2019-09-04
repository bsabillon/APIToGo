const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Teacher = require('../models/Teacher');
const bodyParser = require('body-parser');

var domainMethods = {
    
    isReputationValid: function(teacher) {
        if(teacher.teacherReputation>100){
            return false;
        }
        else{
            return true;
        }

    },

    validateReputation2 : (teacher) => {
        return new Promise((resolve, reject) => {

            if(parseInt(teacher.teacherReputation) < 101){
                resolve("done");
            }else{
                reject("error");
            }
        })
    }
    
    

}

module.exports= domainMethods;