const fs = require('fs');
const path = require('path');

fs.readdir('one',(err,data) => {
  console.log(data);
})                       // [t1.txt,t2.txt]

fs.readdir('one',(err, data) => {
  console.log(data);
  data.forEach( file => {
    console.log(file);
    console.log('extension: ' + path.extname(file)); 
  });
});      // t1.txt
         // extention: .txt
         // t2.txt
         // extention: .txt

console.log('============');

fs.readdir('one',(err,data) => {
  data.forEach( file => {
    console.log(file + '  ' + path.extname(file));
  });
});   // t1.txt  .txt
      // t2.txt  .txt

fs.readdir('one',(err, data) => {
  data.forEach( file => {
    console.log(file + "  " + path.extname(file));
    console.log(fs.statSync(file));
  });
});

fs.readdir('one',(err, data) => {
  data.forEach( file => {
    console.log(fs.statSync('one/' + file));
  });
});