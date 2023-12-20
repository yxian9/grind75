// @algorithm @lc id=141 lang=typescript
// @title linked-list-cycle
import * as a from "algm";
import { ListNode } from "algm";
// @test([3,2,0,-4],1)=true
// @test([1,2],0)=true
// @test([1],-1)=false
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

function hasCycle(head: ListNode | null): boolean {
  // if (!head) return false;
  let fast = head,
    slow = head;
  // while (fast.next && fast.next.next && slow.next) {
  // while (fast.next && fast.next.next) {
  while (fast && fast.next) {
    fast = fast.next.next;
    slow = slow?.next!;
    if (fast === slow) return true;
  }
  return false;
}
