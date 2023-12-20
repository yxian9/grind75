// @algorithm @lc id=110 lang=typescript
// @title balanced-binary-tree
import * as a from "algm";
import { TreeNode } from "algm";
// @test([3,9,20,null,null,15,7])=true
// @test([1,2,2,3,3,null,null,4,4])=false
// @test([])=true
/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */
const getH = (root: TreeNode | null): number => {
  // getH, but not acutally return hight, return real number or false number
  if (root === null) return 0;

  const leftH = getH(root.left);
  if (leftH === -1) return -1;
  const rightH = getH(root.right);
  if (rightH === -1) return -1;
  const diff = Math.abs(leftH - rightH);
  if (diff > 1) {
    return -1; // fake number
  } else {
    return Math.max(leftH, rightH) + 1; // not work on fake number
  }
};
function isBalanced(root: TreeNode | null): boolean {
  const hight = getH(root);
  console.log(hight); // realy hight or fake number
  return hight !== -1;
}
