const iteratorObj = {
  names: ["abc", "cba", "qwe"],
  [Symbol.iterator]: function () {
    let index = 0;

    return {
      next: () => {
        if (index < this.names.length)
          return { done: false, value: this.names[index++] };
        else return { done: true, value: undefined };
      },
    };
  },
};

console.log(iteratorObj[Symbol.iterator])
const iterator = iteratorObj[Symbol.iterator]()
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())
console.log(iterator.next())