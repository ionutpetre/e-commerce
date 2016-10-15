'use strict';

const PRODUCT_FIELDS =
    `products.id AS id, 
products.name AS product, 
products.description AS description,
products.price AS price,
products.quantity AS quantity, 
products.status AS status, 
products.creation_time AS creationTime`;

function getProducts() {
    return `SELECT ${PRODUCT_FIELDS}, 
    categories.name AS categoryName, 
    manufacturers.name AS manufacturerName 
    FROM products
    JOIN categories ON categories.id = products.category
    JOIN manufacturers ON manufacturers.id = products.manufacturer`;
}

function getProductById(productId) {
    return `SELECT ${PRODUCT_FIELDS} FROM products 
    WHERE products.id = ${productId}`;
}

module.exports = {
    getProducts, getProductById
};