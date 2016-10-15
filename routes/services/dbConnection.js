'use strict';

let mysql = require('mysql');

const DB_HOST = 'localhost',
    DB_USER = 'root',
    DB_PASSWORD = '',
    DB_NAME = 'ecommerce';

module.exports = {
    getDb: () => {
        return mysql.createConnection({
            host: DB_HOST,
            user: DB_USER,
            password: DB_PASSWORD,
            database: DB_NAME
        });
    }
};