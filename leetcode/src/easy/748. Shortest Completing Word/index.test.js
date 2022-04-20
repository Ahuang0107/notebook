import {shortestCompletingWord} from "./index";

describe('', () => {
  test('1', () => {
    const licensePlate = "1s3 PSt", words = ["step", "steps", "stripe", "stepple"]
    expect(shortestCompletingWord(licensePlate, words)).toEqual("steps")
  })
  test('2', () => {
    const licensePlate = "1s3 456", words = ["looks", "pest", "stew", "show"]
    expect(shortestCompletingWord(licensePlate, words)).toEqual("pest")
  })
  test('3', () => {
    const licensePlate = "Ah71752",
      words = ["suggest", "letter", "of", "husband", "easy", "education", "drug", "prevent", "writer", "old"]
    expect(shortestCompletingWord(licensePlate, words)).toEqual("husband")
  })
})
