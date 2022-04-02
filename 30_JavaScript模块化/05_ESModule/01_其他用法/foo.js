// 1.第一种方式：export
// export const name = "zzb";
// export const age = 18;
// export function foo() {
//   console.log("foo function");
// }
// export class Person {}

// 2.第二种方式：export导出和声明分开
const name = "zzb";
const age = 18;
function foo() {
  console.log("foo");
}

export { name, age, foo };

// 3.第三种方式：第二种导出时起别名 但是一般导出不会起别名
// export { name as fName, age as fAge, foo as fFoo };
