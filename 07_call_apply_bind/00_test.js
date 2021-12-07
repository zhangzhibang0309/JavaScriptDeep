function foo() {
    this()
}

var bar = foo.bind(function () {
    console.log("ddd")
});
bar();
