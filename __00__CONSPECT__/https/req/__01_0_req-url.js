﻿const http = require("node:http");

const server = http.createServer((req, res) => {
  console.log(req.url);
});

server.listen(8080, () => {
  console.log("Server listening on port 8080");
});

// nodemon server.js localhost 8080
// or
// nodemon server.js

// or
// node server.js
