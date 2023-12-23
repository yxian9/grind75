// @algorithm @lc id=70 lang=typescript
// @title climbing-stairs
import * as a from "algm";
// @test(2)=2
// @test(3)=3
function climbStairs(n: number): number {
  const mem = new Array(n + 1).fill(0);
  if (n == 1) return 1;
  if (n == 2) return 2;
  if (mem[n]) {
    return mem[n];
  } else {
    mem[n] = climbStairs(n - 1) + climbStairs(n - 2); // will not work. the mem will be fresh
    return mem[n];
  }
}
function climbStairs2(n: number): number {
  let memo = Array(n + 1).fill(0);
  function dfs(i: number, memo: number[]) {
    if (i == 1) {
      return 1;
    }
    // if (i == 2) {
    //   return 2;
    // }
    if (memo[i]) {
      return memo[i];
    } // like seem map. assign need pre-order, pre-recurssion.
    memo[i] = dfs(i - 1, memo) + dfs(i - 2, memo);
    return memo[i];
  }
  // return dfs(n, memo);
  let result = dfs(n, memo);
  return result;
}
function climbStairs3(n: number): number {
  let f0 = 1;
  let f1 = 1;
  for (let i = 2; i <= n; i++) {
    let newF = f1 + f0;
    f0 = f1;
    f1 = newF;
  }
  return f1;
}
