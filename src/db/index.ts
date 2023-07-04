import {Sequelize} from 'sequelize';

let logging = process.env.NODE_ENV !== 'production';
let database: string = process.env.DB_NAME ?? 'postgres';
let dbPort: number = parseInt(process.env.DB_PORT ?? '5432');
let dbHost: string = process.env.DB_HOST ?? 'localhost';
let dbUser: string = process.env.DB_USER ?? 'postgres';
let poolMax: number = parseInt(process.env.DB_POOL_MAX ?? '10');

const sequelize = new Sequelize(database, dbUser, process.env.DB_PASS, {
    dialect: 'postgres',
    host: dbHost,
    port: dbPort,
    timezone: '-03:00',
    logging,
    pool: {
        max: poolMax,
        min: 0,
        acquire: 60000,
        idle: 30000
    },
    dialectOptions: {
        ssl: {
            require: true, // This will help you. But you will see nwe error
            rejectUnauthorized: false // This line will fix new error
        }
    }
});

export default sequelize;