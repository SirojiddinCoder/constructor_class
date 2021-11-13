//

class NumsArray extends Array {
    isEmpty() {
      return this.length === 0;
    }
  }
  let arr = new NumsArray(1, 3,  6, 11, 27);
  console.log(arr.isEmpty());
  let filterArr = arr.filter(item => item >= 10);
  console.log(filterArr);
  console.log(filterArr.isEmpty());