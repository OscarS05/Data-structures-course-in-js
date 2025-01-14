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
      for (let i = 0; i < currentBucket.length; i++) {
        if (currentBucket[i][0] === key) {
          return currentBucket[i][1];
        }
      }
    }
    return undefined;
  }

    //Exercises
  delete(key){
    const address = this.hashMethod(key);
    const currentBucket = this.data[address];
    const deletedArray = currentBucket.find(array => array[0] === key);
    
    if(!deletedArray){
        return undefined;
    }
    
    const newBucket = currentBucket.filter((array) => array[0] !== key);

    this.data[address] = newBucket;
    return deletedArray;

    // Código profesor. Es mejor en términos de rendimiento y eficiencia
    // delete(key){
    //     const address = this.hashMethod(key)
    //     const currentBucket = this.data[address]
    //     if (currentBucket) {
    //       for (let i = 0; i < currentBucket.length; i++) {
    //         if (currentBucket[i][0] === key) {
    //           let arrDeletedItems = currentBucket.splice(i, 1)
    //           return arrDeletedItems[0];
    //         }
    //       }
    //     }
    //     return undefined;
    //   }
  }
  getAllKeys(){
    let allKeys = [];
    this.data.forEach(bucket => {
        bucket.forEach(array => {
            allKeys.push(array[0]);
        });
    });

    // Código de compañero que me voló la cabeza
    // getAllKeys(){
    //     return this.data
    //         .flat()
    //         .map(([name]) => name)
    // }

    return allKeys;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("Diego", 1990)
myHashTable.set("Mariana", 1998)
myHashTable.set("Miranda", 2000)
myHashTable.set("Cat", 2010)
myHashTable.getAllKeys();