class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

class MyDoublyLinkedList {
  constructor(value) {
    this.head = {
      value: value,
      next: null,
      prev: null,
    };
    this.tail = this.head;
    this.length = 1;
  }

  append(value) {
    const newNode = new Node(value);
    newNode.prev = this.tail;
    this.tail.next = newNode;
    this.tail = newNode;

    this.length++;

    return this;
  }

  prepend(value) {
    const newNode = new Node(value);

    newNode.next = this.head;
    this.head.prev = newNode;
    this.head = newNode;

    this.length++;

    return this;
  }

  insert(index, value) {
    if (index + 1 > this.length) {
      return this.append(value);
    }

    const newNode = new Node(value);
    const previousNode = this.getTheIndex(index - 1);
    const currentNodeToBeMoved = previousNode.next;

    newNode.prev = previousNode;
    newNode.next = currentNodeToBeMoved;
    previousNode.next = newNode;
    currentNodeToBeMoved.prev = newNode;

    this.length++;
    return this;
  }

  remove(index) {
    if (index > this.length - 1) {
      throw new Error(`Index ${index} does not exist in the list`);
    }

    if (index === 0) {
      const posteriorNode = this.head.next;
      this.head = posteriorNode;
      this.head.prev = null;
      this.length--;
    }

    if (index > 0) {
      const previousNode = this.getTheIndex(index - 1);
      const posteriorNode = previousNode.next.next;
      previousNode.next = posteriorNode;

      if (index === this.length - 1) {
        this.tail = previousNode;
      } else {
        posteriorNode.prev = previousNode;
      }

      this.length--;
    }

    return this;
  }

  getTheIndex(index) {
    let counter = 0;
    let currentNode = this.head;

    while (counter !== index) {
      currentNode = currentNode.next;
      counter++;
    }

    return currentNode;
  }
}

let myLinkedList = new MyDoublyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
myLinkedList.append(4);
myLinkedList.append(5);
console.log('Added nodes', myLinkedList);

myLinkedList.remove(1);

console.log('removed node', myLinkedList);
