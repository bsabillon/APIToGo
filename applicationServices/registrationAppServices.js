const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Teacher = require('../models/Teacher');
const bodyParser = require('body-parser');

var methods = {
    validateTeacher: function(Teacher){
        if( Teacher==''){
            console.log()
        }
        
    }

}


module.exports= methods;