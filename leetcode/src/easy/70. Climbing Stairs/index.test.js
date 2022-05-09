import {climbStairs} from "./index";

describe("sample test", () => {
  test('test 1', () => {
    const n = 2
    expect(climbStairs(n)).toEqual(2)
  })
  test('test 2', () => {
    const n = 3
    expect(climbStairs(n)).toEqual(3)
  })
})
