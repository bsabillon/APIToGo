const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Teacher = require('../models/Teacher');
const bodyParser = require('body-parser');


var domainMethods = {
    
    isReputationValid : (teacher) => {
        return new Promise((resolve, reject) => {

            if(parseInt(teacher.teacherReputation) < 101){
                resolve("Valid");
            }else{
                reject("Invalid");
            }
        })
    },   

}

module.exports= domainMethods;

