const Sequelize = require('sequelize');
const database = require('../config/database');

const Seller = database.define('seller', {
    sellerReputation: {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

module.exports = Seller;