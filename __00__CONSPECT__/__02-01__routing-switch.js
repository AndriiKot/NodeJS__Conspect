const http = require("node:http");
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  switch (path) {
    case "":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("Homepage");
      break;
    case "/about":
      res.writeHead(200, { "Content-Type": "text/plain" });
      res.end("About");
      break;
    default:
      res.writeHead(404, { "Content-Type": "text/plain" });
      res.end("Not Found");
      break;
  }
};

const server = http.createServer(requestHandler);

server.listen(port, () =>
  console.log(`Server started on port ${port}; press Ctrl-C to terminate....`)
);
