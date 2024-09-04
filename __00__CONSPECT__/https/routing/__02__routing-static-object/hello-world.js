const http = require("node:http");
const fs = require("node:fs");
const port = process.env.PORT || 3000;

const PATHS = {
  HOME: "/public/home.html",
  ABOUT: "/public/about.html",
  LOGO: "/public/images/logo__hello-world.png",
  NOT_FOUND: "/public/404.html",
};

// Определяем MIME-типы как константы
const CONTENT_TYPES = {
  HTML: "text/html",
  PNG: "image/png",
  TEXT: "text/plain",
};

// Определяем маршруты
const routes = {
  "": (res) => serveStaticFile(res, PATHS.HOME, CONTENT_TYPES.HTML),
  "/about": (res) => serveStaticFile(res, PATHS.ABOUT, CONTENT_TYPES.HTML),
  "/images/logo__hello-world.png": (res) =>
    serveStaticFile(res, PATHS.LOGO, CONTENT_TYPES.PNG),
  // маршрут по умолчанию
  404: (res) => serveStaticFile(res, PATHS.NOT_FOUND, CONTENT_TYPES.HTML, 404),
};

function serveStaticFile(res, path, contentType, responseCode = 200) {
  fs.readFile(__dirname + path, (err, data) => {
    if (err) {
      res.writeHead(500, { "Content-Type": CONTENT_TYPES.TEXT });
      return res.end("500 - Internal Error");
    }
    res.writeHead(responseCode, { "Content-Type": contentType });
    res.end(data);
  });
}

const server = http.createServer((req, res) => {
  // нормализуем URL, убираем строку запроса, необязательный слэш и
  // приводим к нижнему регистру
  const path = req.url.replace(/\/?(?:\?.*)?$/, "").toLowerCase();
  const routeHandler = routes[path] || routes["404"];
  routeHandler(res);
});

server.listen(port, () =>
  console.log(
    `server started on port ${port}; ` + "press Ctrl-C to terminate...."
  )
);
