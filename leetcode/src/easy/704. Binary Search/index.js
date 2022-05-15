/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0, right = nums.length - 1;
  while (left <= right) {
    const middle = Math.floor((left + right) / 2);
    const num = nums[middle];
    if (num < target) {
      left++;
    } else if (num > target) {
      right--;
    } else {
      return middle;
    }
  }
  return -1;
};

export {
  search
}
