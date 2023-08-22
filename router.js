const url = require("url");
const {
  getProducts,
  addProduct,
  getProductById,
} = require("./controllers/productController");

const router = (req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === "/products" && req.method === "GET") {
    getProducts(res);
  } else if (pathname === "/products" && req.method === "POST") {
    addProduct(req, res);
  } else if (pathname.match(/^\/products\/([a-zA-Z0-9-]+)$/)) {
    const id = pathname.split("/")[2];
    if (req.method === "GET") {
      getProductById(id, res);
    } else if (req.method === "DELETE") {
      res.end("product DELETE");
    } else if (req.method === "PATCH") {
      res.end("product PATCH");
    }
  } else {
    res.writeHead(404);
    res.end(`The route "${pathname}" does not exist`);
  }
};

module.exports = router;
