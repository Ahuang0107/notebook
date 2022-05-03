import {romanToInt} from "./index";

describe("sample test", () => {
  test('test 1', () => {
    const s = "III"
    expect(romanToInt(s)).toEqual(3)
  })
  test('test 2', () => {
    const s = "LVIII"
    expect(romanToInt(s)).toEqual(58)
  })
  test('test 3', () => {
    const s = "MCMXCIV"
    expect(romanToInt(s)).toEqual(1994)
  })
})
