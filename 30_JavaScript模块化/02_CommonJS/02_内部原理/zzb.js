const info = {
  name: "zzb",
  age: 18,
  foo() {
    console.log("foo函数");
  },
};

setTimeout(() => {
    info.name = "zzbGai"
}, 1000);

module.exports = info;
