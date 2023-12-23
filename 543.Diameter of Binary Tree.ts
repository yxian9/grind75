// @algorithm @lc id=543 lang=typescript
// @title diameter-of-binary-tree
import * as a from "algm";
import { TreeNode } from "algm";
// @test([1,2,3,4,3])=3

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

function diameterOfBinaryTree(root: TreeNode | null): number {
  if (!root) return 0;
  let max = 0;
  function depth(node: TreeNode | null, max: number): number {
    if (!node) return 0;
    const left = depth(node.left, max);
    const right = depth(node.right, max);
    max = Math.max(max, left + right); // modify during recurssion, this will not work due to scope.
    // only the max from paras are modified. all paras are setted pre-recursive. no wy to modify after
    return Math.max(left, right) + 1; // return need for depth
  }
  let result = depth(root, max);
  console.log(result);
  return max;
}
