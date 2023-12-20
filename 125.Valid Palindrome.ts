// @algorithm @lc id=125 lang=typescript
// @title valid-palindrome
import * as a from "algm";
// @test("A man, a plan, a canal: Panama")=true
// @test("race a car")=false
// @test(" ")=true
function isPalindrome(s: string): boolean {
  s = s.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // const s = s.toLocaleLowerCase().replace(/[^a-zA-Z0-9]/g, "");
  // function variable is already defined
  let l = 0,
    r = s.length - 1;
  while (l <= r) {
    if (s[l] !== s[r]) {
      return false;
    }
    l++;
    r--;
  }
  return true;
}
