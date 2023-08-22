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

/**
 * Get product bu its` id
 * @route GET /products/{id}
 */
const getProductById = async (id, res) => {
  try {
    const product = await ProductModel.findById(id);
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(product));
  } catch (e) {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        error: e.message,
      })
    );
  }
};

module.exports = {
  getProducts,
  addProduct,
  getProductById,
};
