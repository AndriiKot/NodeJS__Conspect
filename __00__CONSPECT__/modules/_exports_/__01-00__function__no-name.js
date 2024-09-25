// file.js
module.exports = function (a, x, n) {
  let result = 0;
  if (x === 1) result = a * n;
  else result = a * (1 - Math.pow(x, n) / (1 - x));
  return result;
};

// other-file.js
// const geometricSum = require('./file.js');
