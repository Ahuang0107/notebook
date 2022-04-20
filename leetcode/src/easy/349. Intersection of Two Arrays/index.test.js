import {intersection} from "./index";

describe('', () => {
  test('', () => {
    const nums1 = [1, 2, 2, 1], nums2 = [2, 2]
    expect(intersection(nums1, nums2).sort()).toEqual([2].sort())
  })
  test('', () => {
    const nums1 = [4, 9, 5], nums2 = [9, 4, 9, 8, 4]
    expect(intersection(nums1, nums2).sort()).toEqual([9, 4].sort())
  })
})
