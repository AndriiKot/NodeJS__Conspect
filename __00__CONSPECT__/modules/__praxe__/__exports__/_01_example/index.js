const lib = require('./module-1.js');

console.log(lib)  // { sum: [Function: sum], sub: [Function: sub] }
console.dir({lib}) // { lib: { sum: [Function: sum], sub: [Function: sub] } }

fn1 = lib.sum
fn2 = lib.sub

console.log(fn1(5,3)) // 8
console.log(fn2(5,3)) // 2

