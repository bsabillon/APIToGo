const Sequelize = require('sequelize');
const database = require('../config/database');

const CartDetail = database.define('cartDetail', {


    productId: {
        type:Sequelize.INTEGER
    },
    cartQuantity: {
        type:Sequelize.INTEGER
    },
    cartId: {
        type:Sequelize.INTEGER
    },
},
{
    freezeTableName: true,
}
)

module.exports = CartDetail;