const Sequelize = require('sequelize');
const database = require('../config/database');

const Address = database.define('address', {
    userEmail: {
        type:Sequelize.STRING
    },
    addressDescription: {
        type:Sequelize.STRING
    },
    addressPhone: {
        type:Sequelize.STRING
    },
    houseNumber: {
        type:Sequelize.STRING
    },
    addressReference: {
        type:Sequelize.STRING
    },
    addressAlias: {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

module.exports = Address;