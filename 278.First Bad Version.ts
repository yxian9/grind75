// @algorithm @lc id=278 lang=typescript
// @title first-bad-version
import * as a from "algm";
// @test(5,4)=4
// @test(1,1)=1
/**
 * The knows API is defined in the parent class Relation.
 * isBadVersion(version: number): boolean {
 *     ...
 * };
 */

var solution = function (isBadVersion: any) {
  return function (n: number): number {
    let lo = 1,
      hi = n;
    while (lo < hi) {
      let mid = lo + Math.floor((hi - lo) / 2);
      if (isBadVersion(mid)) {
        hi = mid; // shrink the hi end.
      } else {
        lo = mid + 1; // do not forget + 1
      }
    }
    return hi;
  };
};
