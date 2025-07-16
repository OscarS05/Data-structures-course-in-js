class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.top = null;
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    return this.top;
  }

  push(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.top = newNode;
      this.bottom = newNode;
    } else {
      const currentTop = this.top;
      this.top = newNode;
      this.top.next = currentTop;
    }

    this.length++;

    return this;
  }

  pop(){
    if (this.length === 0) {
      throw new Error('There are not items in the stack');
    }

    if (this.top === this.bottom) {
      this.bottom = null;
    }

    const newTop = this.top.next;
    this.top = newTop;

    this.length--;

    this;
  }
}

const myStack = new Stack();
console.log(myStack);
myStack.push(1);
myStack.push(2);
// myStack.push(3);
// myStack.push(4);
// myStack.push(5);

myStack.pop();

console.log(myStack);
