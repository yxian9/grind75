// @algorithm @lc id=1 lang=typescript
// @title two-sum
// @test([2,7,11,15],9)=[0,1]
// @test([3,2,4],6)=[1,2]
// @test([3,3],6)=[0,1]
function twoSum(nums: number[], target: number): number[] {
  let numMap = new Map();
  for (let i = 0; i < nums.length; i++) {
    let diff = target - nums[i];
    if (numMap.has(diff)) {
      return [numMap.get(diff), i];
    }
    numMap.set(nums[i], i); // set nums[i] not the diff
  }
  return [];
}
