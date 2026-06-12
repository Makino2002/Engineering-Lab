const url = require("node:url");
const routes = {
  "/ping": {
    GET: (req, res) => {
      res.end("pong");
    },
  },
};
function route(req, res) {
  const parsedUrl = url.parse(req.url, true);
  console.log(routes[parsedUrl.pathname]);
  const route = routes[parsedUrl.pathname];
  if (!route) {
    res.statusCode = 404;
    return res.end("Route Not Found");
  }
  const handler = route[req.method];
  if (!handler) {
    res.statusCode = 405;
    return res.end("Method Not Allowed");
  }
  handler(req, res);
}

module.exports = route;
