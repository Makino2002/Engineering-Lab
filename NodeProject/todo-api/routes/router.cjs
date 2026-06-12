const url = require("node:url");
const routes = {
  "/ping": {
    GET: (req, res) => {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/plain");
      res.end("pong");
    },
  },
};
function route(req, res) {
  const parsedUrl = url.parse(req.url, true);
  const matchedRoute = routes[parsedUrl.pathname];
  if (!matchedRoute) {
    res.statusCode = 404;
    return res.end("Route Not Found");
  }
  const handler = matchedRoute[req.method];
  if (!handler) {
    res.statusCode = 405;
    return res.end("Method Not Allowed");
  }
  handler(req, res);
}

module.exports = route;
