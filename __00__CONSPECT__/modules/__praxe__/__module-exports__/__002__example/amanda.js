module.exports = {
  geometricSum(a, x, n) {
    let result = 0;
    if (x === 1) result = a * n;
    else result = a * (1 - Math.pow(x, n) / (1 - x));
    return result;
  },
  arithmeticSum(n) {
    return ((n + 1) * n) / 2;
  },
  quadraticFormula(a, b, c) {
    const D = Math.sqrt(b * b - 4 * a * c);
    return [(-b + D) / (2 * a), (-b - D) / (2 * a)];
  },
};
