class Animal {
    action() {
        console.log("animal running")
    }
}

class Dog extends Animal {
    action() {
        console.log("dog running!!!")
    }
}

class Fish extends Animal {
    action() {
        console.log("fish swimming")
    }
}

// animal: dog/fish
// 多态的目的是为了写出更加通用性的代码
function makeActions(animals: Animal[]) {
    animals.forEach(animal => {
        animal.action()
    })
}
makeActions([new Dog(), new Fish()])

export { }