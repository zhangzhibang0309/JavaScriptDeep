interface ILength {
    length: number
}

function getLength<T extends ILength>(arg: T) {
    return arg.length
}

getLength("abc")
getLength([1, 2, 3])
getLength({ length: 10 })

export { }