const fs = require('node:fs');
const path = require('node:path');

fs.readFile(path.join(__dirname, 'hello.txt'),
  (err, data) => { 
    if (err) return console.error('Ошибка при чтении файла.');
    console.log('Содержимое файла');
    console.log(data);
});

// !!! WARNING !!!
/* 
Содержимое файла
<Buffer ef bb bf 0d 0a 48 65 6c 6c 6f 20 66 6f 72 6d 20 4e 6f 64 65 4a 53 21 21 21 0d 0a>
*/

