var names = ["asd", "wqe", "zsh"];
// es5之前写法
// var item1 = names[0];
// var item2 = names[1];
// var item3 = names[2];

// 对数组的解构：[]
// var [item1, item2] = names;
var [item1, item2, item3] = names;
console.log(item1, item2);

// 解构后面的元素
var [, , itemz] = names;
console.log(itemz);

// 解构出一个元素，后面的元素放到一个新数组中
var [itemx, ...newNames] = names;
console.log(newNames);

// 解构的默认值
var [itema, itemb, itemc, itemd = "ddd"] = names;
console.log(itemd);
