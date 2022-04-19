import {maxPower} from "./index";

describe('', () => {
  test('Example 1', () => {
    const s = "leetcode"
    expect(maxPower(s)).toEqual(2)
  })
  test('Example 2', () => {
    const s = "abbcccddddeeeeedcba"
    expect(maxPower(s)).toEqual(5)
  })
  test('Example 3', () => {
    const s = "j"
    expect(maxPower(s)).toEqual(1)
  })
  test('Example 4', () => {
    const s = "cc"
    expect(maxPower(s)).toEqual(2)
  })
})
