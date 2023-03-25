const fs = require('fs');

fs.readFile('t1.txt','utf-8',(err,data) => {
  console.log(data);
});

let text = fs.readFileSync('t1.txt','utf-8');

console.log(text);
console.log('111111111111111111');