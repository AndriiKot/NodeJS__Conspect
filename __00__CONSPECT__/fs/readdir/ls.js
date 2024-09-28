const fs = require('fs');

fs.readdir(__dirname, (err, files) => {
  if (err) return console.error("Невозможно прочитать содержимое каталога");
  console.log(`Содержимое каталога ${__dirname}:`);
  console.log(files.map(f => '\t' + f).join('\n'));
});