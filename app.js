'use strict';

let productService = require('./routes/services/product');

productService.getProducts((err, products) => {
    console.log(products);
});

/*productService.getProductById(1, (err, product) => {
    console.log(product);
});*/

productService.getProductById(1).then((product) => {
    console.log(product);
}).catch((err) => {
    console.log(err);
});