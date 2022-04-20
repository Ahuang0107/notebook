/**
 * @param {number[]} prices
 * @return {number}
 */
export const maxProfit = function (prices) {
  let max = 0;
  for (let i = 1; i < prices.length; ++i) {
    let prev = prices[i - 1], current = prices[i]
    if (current > prev) max += current - prev;
  }
  return max;
};
