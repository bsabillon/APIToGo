const Sequelize = require('sequelize');
const database = require('../config/database');

const Product = database.define('product', {
    

    productDescription: {
        type:Sequelize.STRING
    },
    price: {
        type:Sequelize.INTEGER
    },
    storeId: {
        type:Sequelize.INTEGER
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
    productName: {
        type:Sequelize.STRING
    },
    
},
{
    freezeTableName: true,
}
)

module.exports = Product;