'use strict';

let router = require('express').Router(),
    productService = require('./../services/product');

router.get('/', (req, res) => {
    productService.getProducts()
        .then((products) => {
            res.status(200).send(products);
        })
        .catch((err) => {
            res.status(405).send({ error: err.message });
        });
});

router.get('/:id', (req, res) => {
    let productId = req.params.id;
    productService.getProductById(productId)
        .then((product) => {
            res.status(200).send(product);
        })
        .catch((err) => {
            res.status(405).send({ error: err.message });
        });
});

module.exports = router;