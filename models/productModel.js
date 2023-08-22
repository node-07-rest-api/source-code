const products = require("../products.json");

const findAll = () =>
  new Promise((resolve, reject) => {
    resolve(products);
  });

const create = (product) =>
  new Promise((resolve, reject) => {
    const newProduct = {
      id: products[products.length - 1].id + 1,
      ...product,
    };
    products.push(newProduct);
    resolve(newProduct);
  });

module.exports = { findAll, create };
