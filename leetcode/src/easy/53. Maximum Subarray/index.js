/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let pre = nums[0];
  let max = pre;
  if (nums.length === 1) return pre;
  for (let i = 1; i < nums.length; i++) {
    pre = Math.max(nums[i], pre + nums[i]);
    max = Math.max(max, pre);
  }
  return max;
};

export {
  maxSubArray
}
