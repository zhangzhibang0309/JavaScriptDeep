const info = {
  name: "zzb",
//   friend: {
//     name: "lilei",
//     girlFriend: "hmm",
//   },
};

// 如果某个属性消失 那么就是undefind.xxx 这样就会报错 以前的处理就很麻烦
if(info && info.friend && info.friend.girlFriend) {
    console.log(info.friend.girlFriend)
}

// ES11的可选链很好用
console.log(info?.friend?.girlFriend)
console.log("其他代码") // 不会影响后续