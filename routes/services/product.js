'use strict';

let db = require('./dbConnection').getDb();
let productSql = require('./productSql');

function getProducts(callback) {
    db.query(productSql.getProducts(),
        (err, rows) => {
            if (err) {
                callback(err);
            } else {
                callback(null, rows);
            }
        }
    );
}

function getProductById1(productId, callback) {
    db.query(productSql.getProductById(productId),
        (err, rows) => {
            if (err) {
                callback(err);
            } else {
                callback(null, rows[0]);
            }
        }
    );
}

function getProductById(productId) {
    return new Promise((resolve, reject) => {
        db.query(productSql.getProductById(productId),
            (err, rows) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(rows[0]);
                }
            }
        );
    });
}


module.exports = {
    getProducts, getProductById
};