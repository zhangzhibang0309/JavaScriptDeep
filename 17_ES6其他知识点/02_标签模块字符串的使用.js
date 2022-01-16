// 第一个参数依然是模块字符串中整个字符串，只是被切成多块，放到了一个数组中
// 第二个参数是模块字符串中，第一个${}
function foo(m, n, x) {
  console.log(m, n, x, "-------");
}

foo("hello", "world", "xxx");
// 另外调用函数的方式：标签模块字符串
// foo``

foo`hello world`;
const name = "zzb";
const age = 18;
// 参数一：["hello","wor","ld"]
// 参数二：name
// 参数三：age
foo`Hello${name}wor${age}ld`;

// react: css in js的原理