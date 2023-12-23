// @algorithm @lc id=104 lang=typescript
// @title maximum-depth-of-binary-tree
import * as a from "algm";
import { TreeNode } from "algm";
// @test([3,9,20,null,null,15,7])=3
// @test([1,null,2])=2
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

function maxDepth(root: TreeNode | null): number {
  return depth(root);
}

function depth(node: TreeNode | null): number {
  if (!node) return 0;
  const l = depth(node.left);
  const r = depth(node.right); // two recursive indepent. implecity post recursive.
  return Math.max(l, r) + 1;
}
