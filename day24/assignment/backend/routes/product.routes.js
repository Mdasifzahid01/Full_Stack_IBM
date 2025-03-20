const express = require('express');
const { getProduct } = require('../controllers/products.controller');

const productRouter = express.Router();

productRouter.get('/products', getProduct);

module.exports = {
    productRouter
}

