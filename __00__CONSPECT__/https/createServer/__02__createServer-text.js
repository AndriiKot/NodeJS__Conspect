const http = require("node:http");
const port = process.env.PORT || 3000;

const requestHandler = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/plain" });
  res.end("Hello world!");
};

const server = http.createServer(requestHandler);

server.listen(port, () =>
  console.log(`Server started on port ${port}; press Ctrl-C to terminate....`)
);
