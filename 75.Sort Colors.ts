// @algorithm @lc id=75 lang=typescript
// @title sort-colors
import * as a from "algm";
// @test([2,0,2,1,1,0])=[0,0,1,1,2,2]
// @test([2,0,1])=[0,1,2]
/**
 Do not return anything, modify nums in-place instead.
 */
function sortColors(nums: number[]): void {
  let left = 0,
    right = nums.length - 1;

  for (let i = 0; i <= right; i++) {
    if (nums[i] === 0) {
      swap(nums, i, left);
      left++;
    } else if (nums[i] === 2) {
      swap(nums, i, right);
      right--;
      i--;
    }
  }

  // bubble sorting n^2
  // for (let i = 0; i < nums.length; i++) {
  //   for (let j = 0; j < nums.length - 1 - i; j++) {
  //     if (nums[j] > nums[j + 1]) {
  //       const temp = nums[j];
  //       nums[j] = nums[j + 1];
  //       nums[j + 1] = temp;
  //     }
  //   }
  // }
}
function swap(numbs: number[], i: number, j: number) {
  const temp = numbs[i];
  numbs[i] = numbs[j];
  numbs[j] = temp;
}
