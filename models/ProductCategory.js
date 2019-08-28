const Sequelize = require('sequelize');
const database = require('../config/database');

const ProductCategory = database.define('productCategory', {

    productCategoryName: {
        type:Sequelize.STRING
    },
},
{
    freezeTableName: true,
}
)

module.exports = ProductCategory;