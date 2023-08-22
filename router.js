const url = require("url");
const {
  getProducts,
  addProduct,
  getProductById,
  deleteProductById,
} = require("./controllers/productController");

const router = (req, res) => {
  const { pathname, query } = url.parse(req.url, true);
  if (pathname === "/products" && req.method === "GET") {
    getProducts(query,res);
  } else if (pathname === "/products" && req.method === "POST") {
    addProduct(req, res);
  } else if (pathname.match(/^\/products\/([a-zA-Z0-9-]+)$/)) {
    const id = pathname.split("/")[2];
    if (req.method === "GET") {
      getProductById(id, res);
    } else if (req.method === "DELETE") {
      deleteProductById(id, res);
    } else if (req.method === "PATCH") {
      res.end("product PATCH");
    }
  } else {
    res.writeHead(404);
    res.end(`The route "${pathname}" does not exist`);
  }
};

module.exports = router;
