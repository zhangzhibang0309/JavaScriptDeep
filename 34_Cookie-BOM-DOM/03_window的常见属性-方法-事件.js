// 常见属性
console.log(window.screenX);
console.log(window.screenY);

window.addEventListener("scroll", () => {
  console.log(window.scrollX, window.scrollY);
});

console.log(window.outerHeight);
console.log(window.innerHeight);

// 常见的方法
const scrollBtn = document.querySelector("#scroll");
scrollBtn.onclick = function () {
  window.scrollTo({ top: 2000 });
};

// 常见的事件
window.onload = function() {
    console.log("window窗口加载完毕")
}
window.onfocus = function() {
    console.log("window窗口获取焦点")
}
window.onblur = function() {
    console.log("window窗口失去焦点")
}