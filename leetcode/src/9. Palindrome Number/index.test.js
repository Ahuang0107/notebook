import {isPalindrome} from "./index";

describe("", () => {
  test('', () => {
    const x = 121
    expect(isPalindrome(x)).toEqual(true)
  })
  test('', () => {
    const x = -121
    expect(isPalindrome(x)).toEqual(false)
  })
  test('', () => {
    const x = 10
    expect(isPalindrome(x)).toEqual(false)
  })
  test('', () => {
    const x = 9999
    expect(isPalindrome(x)).toEqual(true)
  })
})
