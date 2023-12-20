// @algorithm @lc id=20 lang=typescript
// @title valid-parentheses
import * as a from "algm";
// @test("()")=true
// @test("()[]{}")=true
// @test("(]")=false
function isValid(s: string): boolean {
  // 类似回文，但是动态对称中心。need stack, trick是左右对称
  const pair = new Map<string, string>([
    ["(", ")"],
    ["[", "]"],
    ["{", "}"],
  ]);
  const stack: string[] = [];
  for (let i of s) {
    if (pair.has(i)) {
      stack.push(pair.get(i)!);
    } else {
      const last = stack.pop();
      if (last !== i) return false;
    }
  }
  return stack.length === 0;
}
