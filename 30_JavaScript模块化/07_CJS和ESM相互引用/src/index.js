// es module导入
import { name, age } from "./foo";

console.log(name, age);

// cjs导入
const bar = require("./bar");
console.log(bar.name, bar.age);
