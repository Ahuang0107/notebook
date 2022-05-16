import {solution} from "./index";

describe("sample test", () => {
  test('test 1', () => {
    const n = 5, bad = 4
    expect(solution((version) => version >= bad)(n)).toEqual(bad)
  })
  test('test 2', () => {
    const n = 1, bad = 1
    expect(solution((version) => version >= bad)(n)).toEqual(bad)
  })
  test('test 3', () => {
    const n = 3, bad = 3
    expect(solution((version) => version >= bad)(n)).toEqual(bad)
  })
  test('test 4', () => {
    const n = 5, bad = 4
    expect(solution((version) => version >= bad)(n)).toEqual(bad)
  })
  test('test 5', () => {
    const n = 2, bad = 1
    expect(solution((version) => version >= bad)(n)).toEqual(bad)
  })
  test('test 6', () => {
    const n = 2, bad = 2
    expect(solution((version) => version >= bad)(n)).toEqual(bad)
  })
  test('test 7', () => {
    const n = 3, bad = 1
    expect(solution((version) => version >= bad)(n)).toEqual(bad)
  })
})
