/**
 * @param {number} x
 * @return {boolean}
 */
export var isPalindrome = function (x) {
  if (x < 0) {
    return false
  } else if (x === 0) {
    return true
  } else if (x % 10 === 0) {
    return false
  } else {
    let number = x
    let reverted = 0
    while (reverted < number) {
      reverted = reverted * 10 + number % 10
      number = Math.floor(number / 10)
    }
    return reverted === number || number === Math.floor(reverted / 10)
  }
};
