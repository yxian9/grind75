// @algorithm @lc id=232 lang=typescript
// @title implement-queue-using-stacks
class MyQueue {
  private in: number[];
  private out: number[];

  constructor() {
    this.in = [];
    this.out = [];
  }

  push(x: number) {
    this.in.push(x);
  }

  pop() {
    if (this.out.length === 0) {
      while (this.in.length > 0) {
        this.out.push(this.in.pop()!);
      }
    }
    return this.out.pop();
  }
  peek() {
    const result = this.pop();
    if (result) {
      this.out.push(result);
    }
    return result;
  }
  empty() {
    return this.out.length === 0 && this.in.length === 0;
  }
}
