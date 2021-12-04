var message = "Hello World";

function foo() {
  console.log(message);
}

function bar() {
  var message = "Hello World";
  foo();
}
bar()