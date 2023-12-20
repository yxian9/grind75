// @algorithm @lc id=792 lang=typescript
// @title binary-search
import * as a from "algm";
// @test([-1,0,3,5,9,12],9)=4
// @test([-1,0,3,5,9,12],2)=-1
function search(nums: number[], target: number): number {
  let low = 0;
  let high = nums.length - 1;
  while (low < high) {
    let mid = Math.floor(low + (high - low) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      low = mid + 1;
    } else {
      high = mid;
    }
  }
  return -1;
}
