// 1.for ... of

// 2.展开运算符
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
const names = [1, 2, 3, 4, 5];
const newNames = [...names, ...iteratorObj];
console.log(newNames);

const obj = { name: "zzb", age: 18 };
// 不能for of
// 但是可以使用展开运算符，这是因为ES9对对象做的一层特殊操作，用的不是迭代器
// 对于V8来说，他是去遍历源对象然后放到新对象里面
const newObj = { ...obj };
console.log(newObj);

// 3.结构语法
const [num1, num2] = names;
// const [name, age] = obj; // ES9新增也是为对象做了特殊处理，原理不是迭代器

// 4.创建一些其他对象时
const set1 = new Set(iteratorObj);
const set2 = new Set(names);

const arr1 = Array.from(iteratorObj);

// 5.Promise.all
console.log("=====")
Promise.all(iteratorObj).then((res) => {
  console.log(res);
});
