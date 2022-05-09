import {maxSubArray} from "./index";

describe("sample test", () => {
  test('test 1', () => {
    const nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]
    expect(maxSubArray(nums)).toEqual(6)
  })
  test('test 2', () => {
    const nums = [1]
    expect(maxSubArray(nums)).toEqual(1)
  })
  test('test 3', () => {
    const nums = [5, 4, -1, 7, 8]
    expect(maxSubArray(nums)).toEqual(23)
  })
})
