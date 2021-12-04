function foo() {
  var name = "zzb";
  function bar() {
    console.log("bar", name);
  }

  return bar;
}

var fn = foo();
fn();

var name = "zzb";
function demo() {
    console.log(name)
}

// 可以访问：test就是闭包
// 有访问到：test就不是闭包，因为他虽然能访问，但是他没有访问
function test() {
    
}