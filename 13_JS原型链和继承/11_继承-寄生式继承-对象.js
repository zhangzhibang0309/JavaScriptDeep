var personObj = {
  running: function () {
    console.log("running");
  },
};

// 创造一个student的工厂函数
function createStudent(name) {
  var stu = Object.create(personObj);
  stu.name = name;
  stu.studying = function () {
    console.log("studying~");
  };
  return stu;
}

//  这种方式也并不是很好 不是我们最终形式
var stuObj = createStudent("kobe");
var stuObj2 = createStudent("james");
var stuObj3 = createStudent("zzb");
