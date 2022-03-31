const name = "zzb";
const age = 18;

function sum(num1, num2) {
  return num1 + num2;
}


// 源码其实是下面这样的
// module.exports = {}
// exports = module.exports
// 所以给exports里面添加属性相当于给module.exports添加，而require导入又能拿到module.exports的引用
// 但是切记不能直接给exports赋值，这就切断其与module.exports的引用了

// 第二种导出方式
// 所以使用exports只能添加
// 使用module.exports的话可以重新赋值
exports.name = name
exports.age = age
exports.sum = sum
// 严格意义上来说CommonJS规范就是用exports,但是由于各种原因,现在社区都是用module.exports