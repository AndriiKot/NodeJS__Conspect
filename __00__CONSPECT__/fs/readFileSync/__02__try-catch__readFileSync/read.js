const fs = require("node:fs");
const path = require("node:path");

const filePath = path.join(__dirname, 'hello.txt');

try {
  const data = fs.readFileSync(filePath, 'utf8');
  console.log('Содержимое файла:');
  console.log(data);
} catch {
  console.error('Ошибка при чтении файла:', err);
}




  