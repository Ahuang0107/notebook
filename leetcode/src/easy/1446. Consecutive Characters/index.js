/**
 * @param {string} s
 * @return {number}
 */
export const maxPower = function (s) {
  let max = 1, current = 1;
  for (let i = 1; i < s.length; i++) {
    if (s[i - 1] === s[i]) {
      current++;
      max = Math.max(max, current);
    } else {
      current = 1;
    }
  }
  return max;
};
