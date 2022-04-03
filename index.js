class SortedList {
  constructor() {
   
    this.items = [];
    this.length = 0;
  }
  add(item) {
    this.items.push(item)
    this.items.sort((a, b) => (a - b))
    this.length = this.length + 1;

  }
  get(value) {
    if (this.items.indexOf(value) == -1) {
      throw new Error('OutOfBounds');
    } else {
      return (this.items.indexOf(value))
    }

  }
  max() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    else {
      return (Math.max(...this.items))
    }



  }
  min() {
    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    else {
      return (Math.min(...this.items))
    }
  }
  avg() {

    if (this.items.length == 0) {
      throw new Error('EmptySortedList');
    }
    else {
      const total = this.items.reduce((acc, c) => acc + c, 0);
      return total / this.items.length;
    }

  }

  sum() {
    if (this.items.length >= 0) {
      var sum = this.items.reduce((a, b) => {
        return a + b;
      }, 0);
      return sum;
    } else {
      return 0;
    }

  }

};

module.exports = SortedList;
