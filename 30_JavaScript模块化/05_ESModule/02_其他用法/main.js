// 1.导入方式一
// import { name, age, foo } from "./foo.js";
// import { fName, fAge, fFoo } from "./foo.js";

// 2.导入方式二：起别名
import { name as fName, age as fAge, foo as fFoo } from "./foo.js";

console.log(fName);
console.log(fAge);
fFoo();

// 3.导入方式三：将导出所有内容放到一个标识符中
import * as foo from "./foo.js";

console.log(foo.name);
console.log(foo.age);
foo.foo();
