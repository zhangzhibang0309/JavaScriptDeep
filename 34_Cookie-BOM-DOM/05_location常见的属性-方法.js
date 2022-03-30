console.log(window.location);

console.log(location.href);

console.log(location.protocol);

// 可回退
location.assign("https://www.baidu.com");
location.href = "https://www.baidu.com";
// 不可回退
location.replace("https://www.baidu.com");

// 强制重载
location.reload(true);
