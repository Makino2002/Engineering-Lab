const { createServer } = require("node:http");
const host = "localhost";
const port = 8000;
const router = require("./routes/router.cjs");
const server = createServer((req, res) => {
  router(req, res);
});
server.listen(port, host, () => {
  console.log(`Server running at http://${host}:${port}/`);
});
