const url = require("url");
const { getProducts, addProduct } = require("./controllers/productController");

const router = (req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === "/products" && req.method === "GET") {
    getProducts(res);
  } else if (pathname === "/products" && req.method === "POST") {
    addProduct(req, res);
  } else {
    res.writeHead(404);
    res.end(`The route "${pathname}" does not exist`);
  }
};

module.exports = router;
