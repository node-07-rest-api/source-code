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

const findById = (id) =>
  new Promise((resolve, reject) => {
    const product = products.find((product) => String(id) === String(product.id));
    if (product) resolve(product);
    reject(new Error("Not found"));
  });

module.exports = { findAll, create, findById };
