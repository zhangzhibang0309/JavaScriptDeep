// class Person {}

// const p1 = new Person();
// const p2 = new Person();
// const p3 = new Person();

// for (let p of p1) {
//   console.log(p);
// }

// 案例：创建一个教师类，创建出来的对象都是可迭代对象
class Classroom {
  constructor(address, name, students) {
    this.address = address;
    this.name = name;
    this.students = students;
  }

  entry(newStudent) {
    this.students.push(newStudent);
  }

  [Symbol.iterator]() {
    let index = 0;
    return {
      next: () => {
        if (index < this.students.length)
          return { done: false, value: this.students[index++] };
        else return { done: true, value: undefined };
      },
      return: () => {
        console.log("迭代器提前停止了~");
        return { done: true, value: undefined };
      },
    };
  }
}

const classroom = new Classroom("深圳", "计算机", ["james", "kobe"]);
classroom.entry("zzb");

for (const stu of classroom) {
  console.log(stu);
  if (stu === "kobe") break;
}

// ES5写法
function obj() {}
obj.prototype[Symbol.iterator] = function () {};
