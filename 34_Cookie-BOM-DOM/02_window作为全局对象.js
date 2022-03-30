var message = "zzb";
var age = 18;

window.setTimeout(() => {
  console.log("settimeout");
});

const obj = new window.Date();
console.log(obj);
window.console.log("window");
/**
 * window对象肩负的重担是很大的
 * 大量属性：localStorage conosle location history（大概60多个）
 * 大量方法：alert close scroll open（40+）
 * 大量事件：focus blur load（30+）
 * 从EventTarget继承过来的方法：addEventListener removeEventListener dispatchEventListener
 */
