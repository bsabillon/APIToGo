const Sequelize = require('sequelize');
const database = require('../config/database');

const Store = database.define('store', {
    storeName: {
        type:Sequelize.STRING
    },
    storeRTN: {
        type:Sequelize.STRING
    },
    storePhone: {
        type:Sequelize.STRING
    },
    storeAddress: {
        type:Sequelize.STRING
    },
    sellerId: {
        type:Sequelize.STRING
    },
    storeCategory: {
        type:Sequelize.STRING
    },
    storePictureURL: {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

module.exports = Store;