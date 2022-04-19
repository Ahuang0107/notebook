import {maxProfit} from "./index";

test('', () => {
  const prices = [7, 1, 5, 3, 6, 4]
  expect(maxProfit(prices)).toEqual(7)
})
test('', () => {
  const prices = [7, 6, 4, 3, 1]
  expect(maxProfit(prices)).toEqual(0)
})
