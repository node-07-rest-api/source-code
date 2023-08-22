const http = require("http");
const url = require("url");
const products = require("./products.json");

const app = http.createServer(async (req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname === "/products" && req.method === "GET") {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(products));
  } else if (pathname === "/products" && req.method === "POST") {
    const body = await getRequestBody(req);
    const product = {
      id: products[products.length - 1].id + 1,
      ...JSON.parse(body),
    };
    products.push(product);
    res.writeHead(201, { "Content-Type": "application/json" });
    res.end(
      JSON.stringify({
        message: "Product added successfully",
        productId: product.id,
      })
    );
  } else {
    res.writeHead(404);
    res.end(`The route "${pathname}" does not exist`);
  }
});

function getRequestBody(request) {
  return new Promise((resolve, reject) => {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk.toString();
    });

    request.on("end", () => {
      resolve(body);
    });

    request.on("error", (error) => {
      reject(error);
    });
  });
}

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
