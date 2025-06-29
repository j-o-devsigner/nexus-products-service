const { config } = require('dotenv')

config();

module.exports = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    users_port: process.env.USERS_PORT,
    products_port: process.env.CUSTOMERS_PORT,
    ssl: process.env.DB_SSLMODE || 'disable',
};