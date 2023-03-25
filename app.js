const fs = require('fs');

fs.readFile('t1.txt','utf-8',(err,data) => {
  console.log(data);
});