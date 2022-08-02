const Sequelize = require('sequelize');

const sequelize = new Sequelize(process.env.DB_NAME,process.env.DB_USER,process.env.DB_PASS,{
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: 5432,
    timezone: '-03:00'     

});

module.exports = sequelize;