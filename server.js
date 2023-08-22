const http = require("http");

const app = http.createServer(() => {
  console.log("Hello from server");
});

const PORT = 3000;

app.listen(PORT, () => {
  console.log(`The server is listening on port ${PORT}`);
});
