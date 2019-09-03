const Sequelize = require('sequelize');
const database = require('../config/database');

const Address = database.define('address', {
    userEmail: {
        type:Sequelize.INTEGER
    },
    addressDescription: {
        type:Sequelize.INTEGER
    },
    addressPhone: {
        type:Sequelize.INTEGER
    },
    houseNumber: {
        type:Sequelize.INTEGER
    },
    addressReference: {
        type:Sequelize.INTEGER
    },
    addressAlias: {
        type:Sequelize.INTEGER
    },
},
{
    freezeTableName: true,
}
)

module.exports = Address;