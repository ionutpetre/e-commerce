'use strict';

let db = require('./dbConnection').getDb();
let productSql = require('./productSql');

function getProducts() {
    return new Promise((resolve, reject) => {
        db.query(productSql.getProducts(),
            (err, rows) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    resolve(rows);
                }
            }
        );
    });
}

function getProductById(productId) {
    return new Promise((resolve, reject) => {
        db.query(productSql.getProductById(productId),
            (err, rows) => {
                if (err) {
                    reject(new Error(err));
                } else {
                    if (rows.length) {
                        resolve(rows[0]);
                    } else {
                        reject(new Error("No product found."));
                    }
                }
            }
        );
    });
}


module.exports = {
    getProducts, getProductById
};