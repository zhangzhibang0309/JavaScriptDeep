const name = "zzb";
const age = 18;

const foo = "foo";

// 默认导出方式一
export {
  name,
  age,
  // foo as default
};

// 默认导出方式二
export default foo
// 默认导出只能有一个