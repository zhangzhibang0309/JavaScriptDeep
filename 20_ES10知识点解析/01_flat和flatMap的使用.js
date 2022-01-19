const nums = [
  10,
  20,
  [2, 9],
  [
    [30, 40],
    [10, 45],
  ],
  78,
  [55, 88],
];

const newNums = nums.flat(2);
console.log(newNums);

// 2.flatMap的使用
const nums2 = [10, 20, 30];
const newNums2 = nums2.flatMap((item) => {
  return item * 2;
});
// 用map看起来似乎差不多
// const newNums2 = nums2.map((item) => {
//   return item * 2;
// });
console.log(newNums2);

// 3.flatMap 的使用场景
const message = ["Hello World", "hello lyh", "my name is Catalina"];
const newMessage = message.flatMap((item) => {
  return item.split(" ");
});
// 自动起到了降维的作用
// const newMessage = message.map((item) => {
//   return item.split(" ");
// });
console.log(newMessage);
