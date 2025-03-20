const express = require('express');

const data = [
    {"name": "Asif", "city": "Kolkata"},
    {"name": "Suman", "city": "Kolkata"}
]

const getProduct = (req, res) => {
    res.status(200).send({message: 'data successfully retrives', data:data})
}

module.exports = {
    getProduct
}