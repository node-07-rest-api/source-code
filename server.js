const http = require("http");
const url = require("url");

const app = http.createServer((req, res) => {
  const { pathname } = url.parse(req.url);
  if (pathname==='/products') {
    res.writeHead(200)
    res.end('products')
  } else {
    res.writeHead(404)
    res.end(`The route "${pathname}" does not exist`)
  }

});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
