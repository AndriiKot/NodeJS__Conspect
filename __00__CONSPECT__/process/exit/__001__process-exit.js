const fs = require('node:fs');

fs.readdir('data', (err, files) => {
  if (err) {
    console.error("Ошибка не могу прочитать файл data.");
    process.exit(1);
  }
  const txtFiles = files.filter(f => /\.txt$/i.test(f));
  if(!txtFiles.length) {
    console.log("Файлы .txt не найдены.");
    process.exit(0);
  }
});

