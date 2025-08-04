class Node
{
  constructor(value)
  {
    this.left = null;
    this.right = null;
    this.value = value;
  }
}

class BinarySearchTree
{
  constructor()
  {
    this.root = null;
  }

  insert(value)
  {
    const newNode = new Node(value);
    if (this.root === null) {
      this.root = newNode;
    } else {
      let currentNode = this.root;
      while (true) {
        if (value < currentNode.value) {
          if (!currentNode.left) {
            currentNode.left = newNode;
            return this;
          }
          currentNode = currentNode.left;
        } else {
          if (!currentNode.right) {
            currentNode.right = newNode;
            return this;
          }
          currentNode = currentNode.right;
        }
      }
    }
  }

  search(value)
  {
    if (this.root === null) {
      return 'The tree is empty';
    }

    let currentNode = this.root;

    while (currentNode && currentNode.value != null) {
      if (value === currentNode.value) {
        return currentNode;
      } else {
        if (value < currentNode.value){
          currentNode = currentNode.left;
        } else if (value > currentNode.value){
          currentNode = currentNode.right;
        }
      }
    }

    return 'The value does not exist in the tree';
  }
}

const tree = new BinarySearchTree();
tree.insert(10);
tree.insert(4);
tree.insert(20);
tree.insert(2);
tree.insert(8);
tree.insert(17);
tree.insert(170);

tree.insert(1);
tree.insert(3);
tree.insert(500);
tree.insert(32);

console.log('searching 600:', tree.search(600));
console.log('searching 4:', tree.search(4));
// tree.search(5);
// tree.search(17);

// console.log('root', tree);
// console.log('root.left', tree.root.left);
// console.log('root.right', tree.root.right);
