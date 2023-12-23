// @algorithm @lc id=200 lang=typescript
// @title number-of-islands
import * as a from "algm";
// @test([["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]])=1
// @test([["1","1","0","0","0"],["1","1","0","0","0"],["0","0","1","0","0"],["0","0","0","1","1"]])=3
const dir = [
  [-1, 0],
  [1, 0],
  [0, 1],
  [0, -1],
];
function numIslands(grid: string[][]): number {
  let m = grid.length,
    n = grid[0].length;
  const seen: boolean[][] = [];
  for (let i = 0; i < m; i++) {
    seen.push(new Array(n).fill(false));
  }
  let result = 0;
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (walk(grid, i, j, seen)) {
        // check if recursion happened!
        // need return for if test
        result += 1;
      }
    }
  }
  return result;
}
function walk(grid: string[][], x: number, y: number, seen: boolean[][]) {
  if (x < 0 || x >= grid.length || y < 0 || y >= grid[0].length) {
    return false;
  }
  if (seen[x][y] || grid[x][y] === "0") {
    return false;
  }
  seen[x][y] = true; // inplace mutation
  for (let [i, j] of dir) {
    walk(grid, x + i, y + j, seen); // no need return, still recur, don't care return value
  }
  return true; // this return is not related to previous walk.
}
