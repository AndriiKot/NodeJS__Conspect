const fs = require('node:fs');
const path = require('node:path'); 

fs.writeFile(path.join(__dirname, 'hello.txt'), 'Hello from NodeJS!', (err) => {  
  if (err) return console.error('Ошибка при записи в файл.');
});