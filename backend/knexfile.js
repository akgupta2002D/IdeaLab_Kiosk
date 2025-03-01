// knexfile.js
// replace with .env variables
require('dotenv').config();
const testUtils = require('react-dom/test-utils');
module.exports = {
    client: 'mysql2',
    connection: {
        host: process.env.DB_HOST,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
    },
};