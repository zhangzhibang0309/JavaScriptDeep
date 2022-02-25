function Student(name, age) {
  this.name = name;
  this.age = age;
}

function Teacher() {}

const stu = new Student("zzb", 18);
console.log(stu.__proto__ === Student.prototype);

// 执行Student函数中的内容，但是创建出来对象是Teacher类型
const teacher = Reflect.construct(Student, ["zzb", 18], Teacher);
console.log(teacher);
console.log(teacher.__proto__ === Teacher.prototype);
