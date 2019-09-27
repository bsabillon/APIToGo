const Sequelize = require('sequelize');
const database = require('../config/database');

const CartStatus = database.define('cartStatus', {


    statusDescription: {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

module.exports = CartStatus;