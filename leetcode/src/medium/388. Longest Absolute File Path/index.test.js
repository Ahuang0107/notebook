import {lengthLongestPath} from "./index";

describe("sample test", () => {
  test('test 1', () => {
    const input = "dir\n\tsubdir1\n\tsubdir2\n\t\tfile.ext"
    expect(lengthLongestPath(input)).toEqual(20)
  })

  test('test 2', () => {
    const input = "dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"
    expect(lengthLongestPath(input)).toEqual(32)
  })

  test('test 3', () => {
    const input = "a"
    expect(lengthLongestPath(input)).toEqual(0)
  })
})
