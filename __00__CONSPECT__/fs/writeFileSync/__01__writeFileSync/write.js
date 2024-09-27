const fs = require("node:fs");
const path = require("node:path");


try {
  fs.writeFileSync(path.join(__dirname, "hello.txt"), "Hello NodeJS!");
} catch (err) {
  console.error("Ошибкак при записи файла.");
}

