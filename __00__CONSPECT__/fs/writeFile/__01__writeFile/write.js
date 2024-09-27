const fs = require('node:fs');

fs.writeFile('hello.txt', 'Hello from NodeJS!', (err) => {
  if (err) return console.log('Ошибка при записи в файл.');
});