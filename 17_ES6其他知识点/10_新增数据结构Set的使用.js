// 10，20，40，333
// 1.创建Set结构
const set = new Set();
set.add(10);
set.add(20);
set.add(40);
set.add(333);

// 并不会添加成功 因为set是唯一的
set.add(10);

// 2.添加对象时特别注意
set.add({});
set.add({}); // 这两个都能添加成功 因为地址不同

const obj = { name: "zzb" };
set.add(obj);
set.add(obj); // 只能添加一个 因为地址是一样的
console.log(set);

// 3.对数组去重（去除重复的元素）
const arr = [22, 10, 26, 30, 33, 26];
const arrSet = new Set(arr);
// const newArr = Array.from(arrSet);
const newArr = [...arrSet];
console.log(newArr);

// 4.size属性
console.log(arrSet.size);

// 5.Set的方法
// add
arrSet.add(100);
// delete
arrSet.delete(33);
// has
console.log(arrSet.has(100));
// clear
arrSet.clear();

// 6.遍历
arrSet.forEach((item) => {
  console.log(item);
});

for (const item of arrSet) {
  console.log(item);
}
