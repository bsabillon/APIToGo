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

    isUserValid : (user) => {
        return new Promise((resolve, reject) => {
           if(this.isNameValid(user.userName) == true &&
              this.isNameValid(user.userName) == true) 
            {
                resolve("Valid");
            }else{
                reject("Invalid");
            }
        })
    },

    isNameValid: (userName )=>{
        if ( userName.match(/[^a-zA-Z ]+/)){
            return true;
        }
        else{
            return false;
        }
    },

    isLastnameValid: (userLastname )=>{
        if ( userLastname.match(/[^a-zA-Z ]+/)){
            return true;
        }
        else{
            return false;
        }
    },

    isUserEmailValid: (userEmail )=>{
        if ( userEmail.includes('@')){
            return true;
        }
        else{
            return false;
        }
    },

    isUserPasswordValid: (userPassword )=>{
        if ( userPassword.match(/^(?=.*\d)(?=(.*\W){2})(?=.*[a-zA-Z])(?!.*\s).{1,15}$/)){
            return true;
        }
        else{
            return false;
        }
    }
}

module.exports= domainMethods;

