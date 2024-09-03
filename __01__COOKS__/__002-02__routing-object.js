const http = require("node:http");
const port = process.env.PORT || 3000;

const routes = {
  "": (res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Homepage");
  },
  "/about": (res) => {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("About");
  },
};

const requestHandler = (req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  const routeHandler = routes[path] || (res) => {
    
  }
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
};

const server = http.createServer(requestHandler);

server.listen(port, () =>
  console.log(`Server started on port ${port}; press Ctrl-C to terminate....`)
);
