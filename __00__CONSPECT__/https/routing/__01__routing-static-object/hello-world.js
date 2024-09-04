const http = require("node:http");
const fs = require("node:fs");
const port = process.env.PORT || 3000;

const PATHS = {
  HOME: "/public/home.html",
  ABOUT: "/public/about.html",
  LOGO: "/public/images/logo__hello-world.png",
  NOT_FOUND: "/public/404.html",
};

const routes = {
  "": (res) => serveStaticFile(res, PATHS.HOME, "text/html"),
  "/about": (res) => serveStaticFile(res, PATHS.ABOUT, "text/html"),
  "/images/logo__hello-world.png": (res) =>
    serveStaticFile(res, PATHS.LOGO, "image/png"),
  // default route
  404: (res) => serveStaticFile(res, PATHS.NOT_FOUND, "text/html", 404),
};
function serveStaticFile(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": "text/plain" });
      return res.end("500 - Internal Error");
    }
    res.writeHead(responseCode, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  // normalize url by removing querystring, optional trailing slash, and
  // making lowercase
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  const routeHandler = routes[path] || routes["404"];
  routeHandler(res);
});

server.listen(port, () =>
  console.log(
    `server started on port ${port}; ` + "press Ctrl-C to terminate...."
  )
);
