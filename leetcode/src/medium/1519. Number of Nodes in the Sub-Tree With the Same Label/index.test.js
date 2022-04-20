import {countSubTrees} from "./index";

describe("countSubTrees test", () => {
  test('test 1', () => {
    const n = 7, edges = [[0, 1], [0, 2], [1, 4], [1, 5], [2, 3], [2, 6]], labels = "abaedcd"
    expect(countSubTrees(n, edges, labels)).toEqual([2, 1, 1, 1, 1, 1, 1])
  })
  test('test 2', () => {
    const n = 4, edges = [[0, 1], [1, 2], [0, 3]], labels = "bbbb"
    expect(countSubTrees(n, edges, labels)).toEqual([4, 2, 1, 1])
  })
  test('test 3', () => {
    const n = 5, edges = [[0, 1], [0, 2], [1, 3], [0, 4]], labels = "aabab"
    expect(countSubTrees(n, edges, labels)).toEqual([3, 2, 1, 1, 1])
  })
  test('test 4', () => {
    const n = 4, edges = [[0, 2], [0, 3], [1, 2]], labels = "aeed"
    expect(countSubTrees(n, edges, labels)).toEqual([1, 1, 2, 1])
  })
  test('test 21 / 59', () => {
    const n = 6, edges = [[0, 1], [0, 2], [1, 3], [3, 4], [4, 5]], labels = "cbabaa"
    expect(countSubTrees(n, edges, labels)).toEqual([1, 2, 1, 1, 2, 1])
  })
  test('test 22 / 59', () => {
    const n = 7, edges = [[0, 1], [1, 2], [2, 3], [2, 4], [3, 5], [0, 6]], labels = "cdcecff"
    expect(countSubTrees(n, edges, labels)).toEqual([3, 1, 2, 1, 1, 1, 1])
  })
})
