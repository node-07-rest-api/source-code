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
    const product = products.find(
      (product) => String(id) === String(product.id)
    );
    if (product) resolve(product);
    reject(new Error("Not found"));
  });

const deleteById = (id) =>
  new Promise((resolve, reject) => {
    const productIndex = products.findIndex(
      (product) => String(id) === String(product.id)
    );
    if (productIndex === -1) reject(new Error("Not found"));
    products.splice(productIndex, 1);
    resolve();
  });

module.exports = { findAll, create, findById, deleteById };
