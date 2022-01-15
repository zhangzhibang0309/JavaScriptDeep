const name = "zzb";
const age = 18;
const height = 1.88;

// ES6提供模板字符串`` 来解决字符串拼接
const message = `my name is ${name},age is ${age},height is${height}`;
console.log(message);

// 可以写表达式
const info = `age double is ${age * 2}`;
console.log(info);

function doubleAge() {
  return age * 2;
}
const info2 = `double age is ${doubleAge()}`;
console.log(info2);
