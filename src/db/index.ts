const Sequelize = require('sequelize');
let logging = process.env.NODE_ENV !== 'production';
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
    dialect: 'postgres',
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    timezone: '-03:00',
    logging,
    pool: {
        max: 15,
        min: 0,
        acquire: 60000,
        idle: 30000
    }
});

export default sequelize;