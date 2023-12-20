// @algorithm @lc id=121 lang=typescript
// @title best-time-to-buy-and-sell-stock
import * as a from "algm";
// @test([7,1,5,3,6,4])=5
// @test([7,6,4,3,1])=0
function maxProfit(prices: number[]): number {
  let min = prices[0];
  let profit = 0;
  for (let cur of prices) {
    if (cur - min > profit) profit = cur - min; //save first
    if (cur < min) min = cur; // create a new min for let test.
    //   profit = Math.max(profit, cur - min);
    //   min = Math.min(cur, min);
  }
  return profit;
}
// for each day, check the possible profit compared
// previous! min day. use max to
