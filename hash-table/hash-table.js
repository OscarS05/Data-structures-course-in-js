class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }
  hashMethod(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const address = this.hashMethod(key);
    if (!this.data[address]) {
      this.data[address] = [];
    }
    this.data[address].push([key, value]);
    return this.data;
  }

  get(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      currentBucket.forEach((bucketItem) => {
        if (bucketItem[0] === key) {
          return bucketItem[1];
        }
      });
    }
  }

  delete(key) {
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    if (currentBucket) {
      let i = 0;
      let data;
      currentBucket.forEach((bucketItem, index) => {
        if (bucketItem[0] === key) {
          data = bucketItem;
          i = index;
        } else {
          return undefined;
        }
      });
      currentBucket.splice(i, 1);
      return data;
    }
  }

  getAllKeys() {
    return this.data.flatMap((el) => el.map((key) => key[0]));
  }
}

const myHashTable = new HashTable(50);
myHashTable.set('Diego', 1990);
myHashTable.set('Oscar', 1998);
myHashTable.set('Isabela', 1998);
myHashTable.set('Luz', 1998);
myHashTable.set('Mery', 1998);
myHashTable.set('Santiago', 1998);
console.log(myHashTable.getAllKeys());
