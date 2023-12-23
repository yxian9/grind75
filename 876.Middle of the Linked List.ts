// @algorithm @lc id=908 lang=typescript
// @title middle-of-the-linked-list
import * as a from "algm";
import { ListNode } from "algm";
// @test([1,2,3,4,5])=[3,4,5]
// @test([1,2,3,4,5,6])=[4,5,6]
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

function middleNode(head: ListNode | null): ListNode | null {
  let slow = head,
    fast = head;
  while (fast && fast.next) {
    // pay attention to the control condition
    slow = slow?.next!;
    fast = fast.next.next;
  }
  return slow;
}
