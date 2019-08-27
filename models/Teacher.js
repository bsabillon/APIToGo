const Sequelize = require('sequelize');
const database = require('../config/database');

const Teacher = database.define('teacher', {
   
    teacherName: {
        type:Sequelize.STRING
    },
    teacherLastname: {
        type:Sequelize.STRING
    },
    teacherEmail: {
        type:Sequelize.STRING
    },
    teacherAddress: {
        type:Sequelize.STRING
    },
    teacherPictureURL: {
        type:Sequelize.STRING
    },
    teacherReputation: {
        type:Sequelize.STRING
    },
    
},
{
    freezeTableName: true,
}
)

module.exports = Teacher;