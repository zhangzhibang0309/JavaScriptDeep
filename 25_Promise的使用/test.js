function func() {
  throw "err";
  console.log("fun");
}

try {
  func();
  console.log(11);
} catch (err) {
  console.log(err);
}
