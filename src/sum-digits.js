const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {
  let arrNumbers = n.toString().split('');
  let sum = 0;

  arrNumbers.forEach((number) => (sum += +number));

  // while (sum > 9) {
  //   arrNumbers = sum.toString().split('');
  //   sum = 0;
  //   arrNumbers.forEach((number) => (sum += +number));
  // }

  if (sum > 9) {
    sum = getSumOfDigits(sum);
  }

  return sum;
}

module.exports = {
  getSumOfDigits,
};
