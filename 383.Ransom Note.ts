// @algorithm @lc id=383 lang=typescript
// @title ransom-note
import * as a from "algm";
// @test("a","b")=false
// @test("aa","ab")=false
// @test("aa","aab")=true
function canConstruct(ransomNote: string, magazine: string): boolean {
  if (magazine.length < ransomNote.length) return false;
  const dict = new Array(26).fill(0);
  const base = "a".charCodeAt(0);
  for (let s of magazine) {
    dict[s.charCodeAt(0) - base]++;
  }
  for (let s of ransomNote) {
    dict[s.charCodeAt(0) - base]--;
  }
  return dict.every((i) => i >= 0);
}
