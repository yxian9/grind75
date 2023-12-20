// @algorithm @lc id=235 lang=typescript
// @title lowest-common-ancestor-of-a-binary-search-tree
import * as a from "algm";
import { TreeNode } from "algm";
// @test([6,2,8,0,4,7,9,null,null,3,5],2,8)=6
// @test([6,2,8,0,4,7,9,null,null,3,5],2,4)=2
// @test([2,1],2,1)=2
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

function lowestCommonAncestor(
  root: TreeNode | null,
  p: TreeNode | null,
  q: TreeNode | null
): TreeNode | null {
  // search by value, travel and return by node. root is not alway root
  if (root === null) return root;
  if (!p || !q) return root;
  const min = Math.min(p.val, q.val),
    max = Math.max(p.val, q.val); // trick to avoid multiple ifelse
  if (root.val >= min && root.val <= max) return root;
  if (root.val > max) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    return lowestCommonAncestor(root.right, p, q);
  }
}
