const fs = require('node:fs');  

fs.writeFile(__dirname + '/hello.txt', 'Hello from NodeJS!', (err) => {  // !!! WARNING for Windows !!!
  if (err) return console.error('Ошибка при записи в файл.');
});