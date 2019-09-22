const express = require('express');
const router = express.Router();
const db = require('../config/database');
const Teacher = require('../models/Teacher');
const User = require('../models/User');
const bodyParser = require('body-parser');
var containsOnlyStrings = /^[A-Za-z_ ]+$/;
var containsOnlyNumbers = /^[0-9]/;
var containsAt = /@/;

var domainMethods = {

    isNameValid: (name) => {
        return (containsOnlyStrings.test(name))
    },

    isLastnameValid: (lastname) => {
        return (containsOnlyStrings.test(lastname))
    },

    isEmailValid: (email) => {
        return (containsAt.test(email))
    },

    isUserValid: (user) => {
        return new Promise((resolve, reject) => {

            if (domainMethods.isNameValid(user.userName) &&
                domainMethods.isLastnameValid(user.userLastname) &&
                domainMethods.isEmailValid(user.userEmail)
            )
            {
                resolve("Valid");
            } else {
                reject("Invalid");
            }
        })
    },


}

module.exports = domainMethods;

