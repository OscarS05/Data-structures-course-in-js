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
      if(this.length === 0){
        return undefined;
      }
      const firstItem = this.data[0];

      for (let i = this.length - this.length; i < this.length; i++) {
        this.data[i] = this.data[i + 1];
      }
      delete this.data[this.length - 1];
      this.length--;
      return firstItem;
    }

    // Exercises not present in the course: slice(start, end), reverse()
    slice(start = 0, end = this.length){
      let newArray = new MyArray;

      if(start < 0){
        start = this.length + start;
      }
      if(end < 0){
        end = this.length + end;
      }
      if(start >= end){
        return newArray;
      }

      for (let i = start; i < end; i++) {
        newArray.push(this.data[i]);
      }
      return newArray;
    }
    reverse(){
      let right = this.length - 1;

      for (let left = 0; left <= right; left ++) { 
        const value = this.data[left];
        this.data[left] = this.data[right];
        this.data[right] = value;

        right--;
      }
    }
}

const myArray = new MyArray();
myArray.push('juan');
myArray.push('oscar');
myArray.push('roro');
myArray.push('lala');