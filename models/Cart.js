const Sequelize = require('sequelize');
const database = require('../config/database');

const Cart = database.define('cart', {
    userEmail: {
        type:Sequelize.STRING
    },
    cartStatusId: {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

module.exports = Cart;