const Sequelize = require('sequelize');
const database = require('../config/database');

const Card = database.define('card', {


    cardNumber: {
        type:Sequelize.INTEGER
    },
    cardName: {
        type:Sequelize.STRING
    },
    cardExpiration: {
        type:Sequelize.STRING
    },
    cardCVV: {
        type:Sequelize.INTEGER
    },
    cardDescription: {
        type:Sequelize.STRING
    },
    userEmail: {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

module.exports = Card;