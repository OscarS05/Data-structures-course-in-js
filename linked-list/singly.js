class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}
  
class MySinglyLinkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null,
        };
        this.tail = this.head;

        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;

        return this;
    }

    prepend(value) {
        const newNode = new Node(value);

        newNode.next = this.head;
        this.head = newNode;

        this.length++;

        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }

        const newNode = new Node(value);
        const firstPointer = this.getTheIndex(index - 1);
        const holdingPointer = firstPointer.next;
        firstPointer.next = newNode;
        newNode.next = holdingPointer;

        this.length++;

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

    remove(index) {
        if (index > this.length - 1) {
            throw new Error(`Index ${index} does not exist in the list`);
        }

        if (index === 0) {
            this.head = this.head.next;
            this.length--;
        }

        if (index > 0) {
            const previousNode = this.getTheIndex(index - 1);
            const posteriorNode = previousNode.next.next;
            previousNode.next = posteriorNode
            
            if (index === this.length - 1) {
                this.tail = previousNode;
            }
            this.length--;
        }
        return this;
    }
}

let myLinkedList = new MySinglyLinkedList(1);
myLinkedList.append(2);
myLinkedList.append(3);
// myLinkedList.append(4);
// myLinkedList.append(5);

// console.log(myLinkedList);
console.log(myLinkedList);