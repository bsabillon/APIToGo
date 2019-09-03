const Sequelize = require('sequelize');
const database = require('../config/database');

const Card = database.define('card', {
    cardNumber: {
        type:Sequelize.INTEGER
    },
    cardName: {
        type:Sequelize.INTEGER
    },
    cardExpiration: {
        type:Sequelize.INTEGER
    },
    cardCVV: {
        type:Sequelize.INTEGER
    },
    cardDescription: {
        type:Sequelize.INTEGER
    },
    userEmail: {
        type:Sequelize.INTEGER
    },
},
{
    freezeTableName: true,
}
)

module.exports = Card;