/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let l = 0;
  r = 1;
  let maxProfit = 0;

  while (r < prices.length) {
    if (prices[r] > prices[l]) {
      profit = prices[r] - prices[l];
      if (maxProfit < profit) {
        maxProfit = profit;
      }
    } else {
      l = r;
    }
    r++;
  }
  return maxProfit;
};
