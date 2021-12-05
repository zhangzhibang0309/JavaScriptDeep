// 1.settimeout

// function hySetTimeout(fn, duration) {
//   fn.call("abc");
// }

// hySetTimeout(function () {
//   console.log(this);
// }, 2000);

// 从上面看来 我们不知道settimeout的具体实现 所以并不知道this是谁
// setTimeout(function () {
//   console.log(this); // window
// }, 2000);

// 2.监听点击
// const boxDiv = document.querySelector(".box");
// boxDiv.onclick = function () {
//   console.log(this); // boxDiv对象
// };

// boxDiv.addEventListener("click", function () {
//   console.log(this); // boxDiv对象
// });
// boxDiv.addEventListener("click", function () {
//   console.log(this); // boxDiv对象
// });

// 3.数组.forEach/map/filter/find
var names = ["abc","sad","qwe"]
names.forEach(function(item) {
    console.log(item,this) // 原本是window 但是可以在第二个参数处指定
},"qqq");
// 其他的这几个函数也都是这样



