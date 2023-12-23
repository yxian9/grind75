// @algorithm @lc id=53 lang=typescript
// @title maximum-subarray
import * as a from "algm";
// @test([-2,1,-3,4,-1,2,1,-5,4])=6
// @test([1])=1
// @test([5,4,-1,7,8])=23
function maxSubArray(nums: number[]): number {
  let maxSum: number = -Infinity;
  let currSum: number = -Infinity;
  let start: number = 0;
  let end: number = 0;
  let currStart: number = 0;
  let currEnd: number = 0;

  nums.forEach((n, i) => {
    if (currSum + n >= n) {
      // if n is so negative, even all previous sum can not recover
      currSum += n; // # need previous subarr
      currEnd = i; // update right
    } else {
      currSum = n; // don't need previous subarr sum,
      currStart = currEnd = i; //reset indices
    }

    if (currSum > maxSum) {
      // not update untial maxSum change
      // hold as previous max
      maxSum = currSum;
      start = currStart;
      end = currEnd;
    }
  });

  return nums.slice(start, end + 1).reduce((acc, val) => acc + val, 0);
}
function maxSubArray2(nums: number[]): number {
  for (let i = 1; i < nums.length; i++) {
    if (nums[i - 1] > 0) {
      // keep add into sum, until one item will kill all!
      nums[i] = nums[i] + nums[i - 1];
    }
  }

  return Math.max(...nums);
}
