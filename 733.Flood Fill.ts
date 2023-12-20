// @algorithm @lc id=733 lang=typescript
// @title flood-fill
import * as a from "algm";
// @test([[1,1,1],[1,1,0],[1,0,1]],1,1,2)=[[2,2,2],[2,2,0],[2,0,1]]
// @test([[0,0,0],[0,0,0]],0,0,0)=[[0,0,0],[0,0,0]]
const dir = [
  [0, 1],
  [0, -1],
  [1, 0],
  [-1, 0],
];
const fill = (
  i: number,
  j: number,
  visit: boolean[][],
  image: number[][],
  oldColor: number,
  color: number
) => {
  const m = image.length;
  const n = image[0].length;
  if (
    i < 0 ||
    i >= m ||
    j < 0 ||
    j >= n ||
    image[i][j] !== oldColor ||
    visit[i][j] === true
  ) {
    return;
  }
  image[i][j] = color;
  visit[i][j] = true;
  for (let [x, y] of dir) {
    fill(i + x, j + y, visit, image, oldColor, color);
  }
};
function floodFill(
  image: number[][],
  sr: number,
  sc: number,
  color: number
): number[][] {
  const oldColor = image[sr][sc];
  const visit: boolean[][] = [];
  for (let i = 0; i < image.length; i++) {
    visit.push(new Array(image[0].length).fill(false));
  }
  fill(sr, sc, visit, image, oldColor, color);
  return image;
}
