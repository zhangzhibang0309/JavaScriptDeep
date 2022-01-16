const info = {
  name: "zzb",
  friend: { name: "kobe" },
};

const obj = { ...info, name: "bbz" };
console.log(obj);
obj.friend.name = "james";
// 可以看出 对info里面的对象是浅拷贝
console.log(info.friend.name);
