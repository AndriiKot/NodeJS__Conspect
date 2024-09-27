const fs = require("node:fs");
const path = require("node:path");


const data = fs.readFileSync(path.join(__dirname, '/hello.txt'),'utf8')

if (data) {
  console.log('Содержимое файла:');
  console.log(data);
} else {
  console.error('Ошибка при чтении файла: ', err);
}

  