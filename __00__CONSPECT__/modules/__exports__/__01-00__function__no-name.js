// file.js
module.exports = function (a, x, n) {
  let result = 0;
  if (x === 1) result = a * n;
  else result = a * (1 - Math.pow(x, n) / (1 - x));
  return result;
};

// other-file.js
// const geometricSum = require('./file.js');
/*
const a = 2; // первый член прогрессии
const x = 0.5; // знаменатель прогрессии
const n = 10; // количество членов

const result = geometricSum(a, x, n);
console.log(`Сумма первых ${n} членов геометрической прогрессии: ${result}`);
*/
