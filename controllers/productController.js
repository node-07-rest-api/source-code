const ProductModel = require("../models/productModel");
const { getRequestBody } = require("../utils");
/**
 * Get all products
 * @route GET /products
 */
const getProducts = async (res) => {
  try {
    const products = await ProductModel.findAll();
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } catch (e) {
    console.log(e);
  }
};

/**
 * Add an new products
 * @route POST /products
 */
const addProduct = async (req, res) => {
  try {
    const body = await getRequestBody(req);
    const product = await ProductModel.create(JSON.parse(body));
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product added successfully",
        productId: product.id,
      })
    );
  } catch (e) {
    console.log(e);
  }
};

module.exports = {
  getProducts,
  addProduct,
};
