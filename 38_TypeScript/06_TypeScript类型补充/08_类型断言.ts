// 类型断言as 讲广泛的类型转成比较具体的类型
const el = document.getElementById("zzb") as HTMLImageElement
el.src = "url地址"

// 另外案例：Person是Student的弗雷
class Person {

}

class Student extends Person {
    studying() {

    }
}

function sayHello(p: Person) {
    // 把宽泛类型转成具体类型
    (p as Student).studying()

    console.log("hello")
}

const stu = new Student()
sayHello(stu) // student也是person



// 3.逃过编译
const message = "Hello World"
const num: number = message as any as number