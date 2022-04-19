/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
export const twoSum = function (nums, target) {
  let result = []
  for (let i = 0; i < nums.length; i++) {
    const left = nums[i]
    const diff = target - left
    for (let j = i + 1; j < nums.length; j++) {
      const right = nums[j]
      if (diff === right) result = [i, j]
    }
  }
  return result
};
