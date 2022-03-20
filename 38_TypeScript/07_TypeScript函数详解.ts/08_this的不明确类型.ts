type ThisType = { name: string }

function eating(this: ThisType) {
    console.log(this.name, "eating")
}

const info = {
    name: "zzb",
    eating
}

// 隐式绑定
info.eating()

// 显示绑定
eating.call({ name: "kobe" })

export { }