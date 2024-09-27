const fs = require('node:fs');
const path = require('node:path');

fs.readFile(path.join(__dirname, 'hello.txt'),
  { encoding: 'utf8' },
  (err, data) => { 
    if (err) return console.error('Ошибка при чтении файла.');
    console.log('Содержимое файла');
    console.log(data);
});

/* 
Содержимое файла
﻿
Hello form NodeJS!!!
*/

