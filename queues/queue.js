class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  peek() {
    return this.first;
  }

  enqueue(value) {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    this.length++;

    return this;
  }

  dequeue(){
    if (this.length === 0) {
      throw new Error('There are not items in the queue');
    }

    if (this.first === this.last) {
      this.last = null;
    }

    const newfirst = this.first.next;
    this.first = newfirst;

    this.length--;

    return this;
  }
}

const myQueue = new Queue();
myQueue.enqueue(1);
myQueue.enqueue(2);
// myQueue.enqueue(3);
// myQueue.enqueue(4);
// myQueue.enqueue(5);

// myQueue.dequeue();

console.log(myQueue);
