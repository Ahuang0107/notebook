import {numWaterBottles} from "./index";

describe("numWaterBottles test", () => {
  test('test 1', () => {
    const numBottles = 9, numExchange = 3
    expect(numWaterBottles(numBottles, numExchange)).toEqual(13)
  })
  test('test 2', () => {
    const numBottles = 15, numExchange = 4
    expect(numWaterBottles(numBottles, numExchange)).toEqual(19)
  })
})
