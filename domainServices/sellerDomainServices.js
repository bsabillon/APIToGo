const express = require('express');
var containsOnlyStrings = /^[A-Za-z_ ]+$/;
var containsOnlyNumbers = /^[0-9]/;
var containsAt = /@/;

var domainMethods = {

    isProductQuantityValid: (productQuantity) => {
        return (containsOnlyStrings.test(productQuantity))
    },

    isLastnameValid: (lastname) => {
        return (containsOnlyStrings.test(lastname))
    },

    isEmailValid: (email) => {
        return (containsAt.test(email))
    },

    isProductValid: (user) => {
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

