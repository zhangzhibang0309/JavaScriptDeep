// // 1.生成器来替代迭代器
// function* createArrayIterator(arr) {
//   // 第一种写法
//   //   yield arr[index++]; // {done: false,value: "abc"}
//   //   yield arr[index++]; // {done: false,value: "qwe"}
//   //   yield arr[index++]; // {done: false,value: "asd"}
//   // 第二种写法
//   //   for (const item of arr) {
//   //     yield item;
//   //   }
//   // 第三种写法 写法二的语法糖
//   yield* arr;
// }

// const names = ["abc", "qwe", "asd"];
// const namesIterator = createArrayIterator(names);

// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());
// console.log(namesIterator.next());

// 2.创建一个函数，这人函数可以迭代一个范围内的数字
// 10 20
function* createRangeIterator(start, end) {
  // 1.普通迭代器
  //   let index = start;
  //   return {
  //     next() {
  //       if (index < end) return { done: false, value: index++ };
  //       else return { done: true, value: undefined };
  //     },
  //   };
  // 2.改成生成器
  //   let index = start;
  //   while (index < end) {
  //     yield index++;
  //   }
}
const rangeIterator = createRangeIterator(10, 20);
console.log(rangeIterator.next());
console.log(rangeIterator.next());

class Classroom {
  constructor(address, name, students) {
    this.address = address;
    this.name = name;
    this.students = students;
  }

  entry(newStudent) {
    this.students.push(newStudent);
  }

  *[Symbol.iterator]() {
    yield* this.students;
  }
}
const classroom = new Classroom("深圳", "计算机", ["james", "kobe"]);
classroom.entry("zzb");

for (const stu of classroom) {
  console.log(stu);
}
