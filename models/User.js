const Sequelize = require('sequelize');
const database = require('../config/database');

const User = database.define('user', {
    userEmail: {
        type:Sequelize.STRING
    },
    userName: {
        type:Sequelize.STRING
    },
    userLastname: {
        type:Sequelize.STRING
    },
    userDOB: {
        type:Sequelize.STRING
    },
    userPhone: {
        type:Sequelize.STRING
    },
    userAddress: {
        type:Sequelize.STRING
    },
    sellerId: {
        type:Sequelize.STRING
    },
    userPassword: {
        type:Sequelize.STRING
    },
    userPictureURL: {
        type:Sequelize.STRING
    },
})

module.exports = User;