// 1
var n = 100;

function foo() {
  n = 200;
}
foo();

console.log(n); // => 200