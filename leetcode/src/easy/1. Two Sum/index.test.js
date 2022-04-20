import {twoSum} from "./index";

test('', () => {
  const nums = [2, 7, 11, 15], target = 9
  expect(twoSum(nums, target)).toEqual([0, 1])
})
test('', () => {
  const nums = [3, 2, 4], target = 6
  expect(twoSum(nums, target)).toEqual([1, 2])
})
test('', () => {
  const nums = [3, 3], target = 6
  expect(twoSum(nums, target)).toEqual([0, 1])
})
