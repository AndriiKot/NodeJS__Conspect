// file.js
function calculate(a, x, n) {
  let result = 0;
  if (x === 1) result = a * n;
  else result = a * (1 - Math.pow(x, n) / (1 - x));
  return result;
}

module.exports = calculate;

// other-file.js
// const geometricSum = require('./file.js');
// geometricSum(1, 2, 3) // 9

