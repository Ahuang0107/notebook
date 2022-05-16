/**
 * Definition for isBadVersion()
 *
 * @param {int} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {int} n Total versions
   * @return {int} The first bad version
   */
  return function (n) {
    let left = 1, right = n;
    while (left < right) {
      const middle = Math.floor((right - left) / 2 + left);
      if (isBadVersion(middle)) {
        right = middle;
      } else {
        left = middle + 1;
      }
    }
    return left;
  };
};

export {
  solution
}
