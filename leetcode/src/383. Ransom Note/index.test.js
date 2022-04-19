import {canConstruct} from "./index";

describe('', () => {
  test('Example 1', () => {
    const ransomNote = "a", magazine = "b"
    expect(canConstruct(ransomNote, magazine)).toEqual(false)
  })
  test('Example 2', () => {
    const ransomNote = "aa", magazine = "ab"
    expect(canConstruct(ransomNote, magazine)).toEqual(false)
  })
  test('Example 3', () => {
    const ransomNote = "aa", magazine = "aab"
    expect(canConstruct(ransomNote, magazine)).toEqual(true)
  })
})
