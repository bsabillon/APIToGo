const Sequelize = require('sequelize');
const database = require('../config/database');

const Product = database.define('product', {
   
    productDescription: {
        type:Sequelize.STRING
    },
    price: {
        type:Sequelize.STRING
    },
    storeId: {
        type:Sequelize.STRING
    },
    productQuantity: {
        type:Sequelize.STRING
    },
    productPictureURL: {
        type:Sequelize.STRING
    },
    productCategoryId: {
        type:Sequelize.STRING
    },
    
},
{
    freezeTableName: true,
}
)

module.exports = Product;