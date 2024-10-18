const fs = require("node:fs");
const path = require("node:path");

// DANGER NOT VALID CODE !!!
const data = fs.readFileSync(path.join(__dirname, '/helo.txt'),'utf8')  // error !!! 

if (data) {
  console.log('Содержимое файла:');
  console.log(data);
} else {
  console.error('Ошибка при чтении файла: ', err); // 
}
// DANGER! NOT VALID CODE !!!

  