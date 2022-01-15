const names = ["abv", "qwe", "dfg"];

// 这里不能使用const 因为i有个++的操作
for (const i = 0; i < names.length; i++) {
  console.log(names[i]);
}
// 但是这里就可以 这里没有最item进行修改 其实是在每次循环的作用域下面重新定义item
for (const item of names) {
  console.log(item);
}
