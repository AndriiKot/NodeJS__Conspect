const http = require("node:http");
const fs = require("node:fs");
const port = process.env.PORT || 3000;

const {
  HOME: home,
  ABOUT: about,
  LOGO: logo,
  NOT_FOUND: notFound,
} = JSON.parse(fs.readFileSync("./config/paths.json", "utf-8"));

const {
  TEXT: text,
  HTML: html,
  PNG: png,
} = JSON.parse(fs.readFileSync("./config/content_types.json", "utf-8"));

const routes = {
  "": (res) => serveStaticFile(res, home, html),
  "/about": (res) => serveStaticFile(res, about, html),
  "/images/logo__hello-world.png": (res) => serveStaticFile(res, logo, png),
  // маршрут по умолчанию
  404: (res) => serveStaticFile(res, notFound, html, 404),
};

function serveStaticFile(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": text });
      return res.end("500 - Internal Error");
    }
    res.writeHead(responseCode, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  const routeHandler = routes[path] || routes["404"];
  routeHandler(res);
});

server.listen(port, () =>
  console.log(
    `server started on port ${port}; ` + "press Ctrl-C to terminate...."
  )
);
