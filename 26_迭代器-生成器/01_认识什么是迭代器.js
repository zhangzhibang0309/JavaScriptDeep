// 编写的一个迭代器对象
// const iterator = {
//   next() {
//     return {
//       done: true,
//       value: 123,
//     };
//   },
// };

// 数组
const names = ["abc", "cba", "nba"];
// for遍历
// for (let i = 0; i < names.length; i++) {}
// 使用迭代器遍历
let index = 0;
const namesIterator = {
  next() {
    if (index < names.length) return { done: false, value: names[index++] };
    else return { done: true, value: undefined };
  },
};

console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
console.log(namesIterator.next());
const num = [10, 20, 30, 40, 50];
