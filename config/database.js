const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://biagdrmzjwofew:be6821cc082961e72b52e17aaa523e6158bea954fa0d8b76d31ea731ee8ec8c5@ec2-54-83-9-169.compute-1.amazonaws.com:5432/ddj7m7eaq1ll6i?ssl=true&sslfactory=org.postgresql.ssl.NonValidatingFactory',{
    host:'ec2-54-83-9-169.compute-1.amazonaws.com',
    dialect: 'postgres',
    pool: {
        max:10,
        min:0,
        acquire: 30000,
        idle: 10000
    }
});


// sequelize.sync({ force: false })
//   .then(() => {
//     //console.log(`Database & tables created!`)
//   })

  module.exports  = sequelize;