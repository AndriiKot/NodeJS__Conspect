// file.js
exports.geometricSum = function (a, x, n) {
  let result = 0;
  if (x === 1) result = a * n;
  else result = a * (1 - Math.pow(x, n) / (1 - x));
  return result;
};
exports.arithmeticSum = function (n) {
  return ((n + 1) * n) / 2;
};

exports.quadraticFormula = function (a, b, c) {
  const D = Math.sqrt(b * b - 4 * a * c);
  return [(-b + D) / (2 * a), (-b - D) / (2 * a)];
};

// otherFile.js
// const file = require('./file.js');
// console.log(file.geometricSum(1, 2, 5));
// console.log(file.quadraticFurmula(1, 2, -15));
