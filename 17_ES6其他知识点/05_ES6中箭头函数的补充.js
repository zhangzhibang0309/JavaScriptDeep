var bar = () => {
  // 没有this argumrnts
  console.log(this, arguments);
};
// 没有显式的原型
console.log(bar.prototype);

const b = new bar();
