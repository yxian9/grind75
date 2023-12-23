// @algorithm @lc id=206 lang=typescript
// @title reverse-linked-list
import * as a from "algm";
import { ListNode } from "algm";

// @test([1,2,3])=[3,2,1]
/**
 * Definition for singly-linked list.
 * class ListNode {
 *     val: number
 *     next: ListNode | null
 *     constructor(val?: number, next?: ListNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.next = (next===undefined ? null : next)
 *     }
 * }
 */

function reverseList(head: ListNode | null): ListNode | null {
  const r = walk(null, head); // do not forget return
  console.log(r);
  return r;
}

function walk(pre: ListNode | null, curr: ListNode | null): ListNode | null {
  if (!curr) return pre;
  let temp: ListNode | null = curr.next; // hold
  curr.next = pre; // break
  pre = curr; // move
  curr = temp; // move 2
  console.log(pre);
  return walk(pre, curr); // do not forget return, return to pass to parent
  // console.log(r);
  // return r;
  // recursion return help build nested strut
}
