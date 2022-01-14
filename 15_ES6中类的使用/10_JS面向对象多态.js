function calcArea(foo) {
  console.log(foo.getArea());
}

var obj1 = {
  name: "zzb",
  getArea: function () {
    return 1000;
  },
};

class Person {
  getArea() {
    return 100;
  }
}
var p = new Person();

calcArea(obj1);
calcArea(p);
