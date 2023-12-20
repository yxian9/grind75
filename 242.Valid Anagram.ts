// @algorithm @lc id=242 lang=typescript
// @title valid-anagram
import * as a from "algm";
// @test("anagram","nagaram")=true
// @test("rat","car")=false
function isAnagram(s: string, t: string): boolean {
  if (s.length !== t.length) return false;
  const arr = new Array(26).fill(0);
  const pivot = "a".charCodeAt(0);
  for (let i = 0; i < s.length; i++) {
    arr[s.charCodeAt(i) - pivot]++;
    arr[t.charCodeAt(i) - pivot]--;
  }
  return arr.every((i) => i === 0);
}
