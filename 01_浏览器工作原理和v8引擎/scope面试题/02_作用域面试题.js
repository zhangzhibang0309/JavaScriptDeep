function foo() {
  console.log(n); // undefined
  var n = 100;
  console.log(n); // undefined
}

var n = 100;
foo();
 