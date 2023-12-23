// @algorithm @lc id=409 lang=typescript
// @title longest-palindrome
import * as a from "algm";
// @test("bananas")=7

function longestPalindrome(s: string): number {
  let result = 0,
    odd = 0;
  let dict = new Map<string, number>();
  for (let i of s) {
    // if (dict.has(i)) {
    // dict.set(i, dict.get(i)! + 1);
    // } else {
    //   dict.set(i, 1);
    // }
    const v = dict.get(i);
    dict.set(i, v ? v + 1 : 1);
  }
  for (let [_, v] of dict) {
    let rem = v % 2;
    // result += v - rem; // trick
    if (rem === 0) {
      result += v;
    } else {
      odd = 1;
      result = result + v - 1;
    }
  }

  return result + odd;
}

// let showOdd = false;
// let maxLen = 0;
// for (let [_, value] of map) {
//   if (value % 2 === 0) {
//     maxLen += value;
//   }
//   else {
//     showOdd = true;
//     maxLen += (value - 1);
//   }
// }

// if (showOdd) {
//   maxLen += 1;
// }

// return maxLen;
