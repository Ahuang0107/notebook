import {search} from "./index";

describe("sample test", () => {
  test('test 1', () => {
    const nums = [-1, 0, 3, 5, 9, 12], target = 9
    expect(search(nums, target)).toEqual(4)
  })
  test('test 2', () => {
    const nums = [-1, 0, 3, 5, 9, 12], target = 2
    expect(search(nums, target)).toEqual(-1)
  })
  test('test 3', () => {
    const nums = [5], target = 5
    expect(search(nums, target)).toEqual(0)
  })
  test('test 4', () => {
    const nums = [2, 5], target = 5
    expect(search(nums, target)).toEqual(1)
  })
})
