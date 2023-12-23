// @algorithm @lc id=169 lang=typescript
// @title majority-element
import * as a from "algm";
// @test([3,2,3])=3
// @test([2,2,1,1,1,2,2])=2
function majorityElement(nums: number[]): number {
  const len = nums.length >> 1; // Math.floor(nums.length /2 )
  const map = new Map<number, number>();
  for (let i of nums) {
    let j = map.get(i);
    map.set(i, j ? j + 1 : 1);
    if (map.get(i)! > len) return i;
  }
}
