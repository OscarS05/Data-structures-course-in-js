// const array = ["Diego", "Karen", "Oscar"];

class MyArray {
    constructor() {
      this.length = 0;
      this.data = {};
    }
    get(index) {
      return this.data[index];
    }
    push(item) {
      this.data[this.length] = item;
      this.length++;
      return this.data;
    }
    pop() {
      const lastItem = this.data[this.length - 1];
      delete this.data[this.length - 1];
      this.length--;
      return lastItem;
    }
    delete(index) {
      const item = this.data[index];
      this.shiftIndex(index);
  
      return item;
    }
    shiftIndex(index) {
      for (let i = index; i < this.length - 1; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
    unshift(item){
      for (let i = this.length; i > this.length - this.length; i--) {
        this.data[i] = this.data[i - 1];
      }
      this.data[0] = item;
      this.length++;
    }
    shift(){
      for (let i = this.length - this.length; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
    }
}

const myArray = new MyArray();

myArray.push('juan');
myArray.push('oscar');
myArray.push('roro');
myArray.push('lala');
// myArray.shiftIndex(1);
console.log(myArray);
myArray.unshift('pirroro');
console.log(myArray);
myArray.shift();
console.log(myArray);