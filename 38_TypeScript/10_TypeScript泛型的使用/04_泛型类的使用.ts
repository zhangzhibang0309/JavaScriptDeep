class Point<T> {
    x: T
    y: T
    z: T

    constructor(x: T, y: T, z: T) {
        this.x = x
        this.y = y
        this.z = z
    }
}

const p1 = new Point("21.23.3", "123", "123.123.34")
const p2 = new Point<string>("21.23.3", "123", "123.123.34")
const p3: Point<string> = new Point<string>("21.23.3", "123", "123.123.34")

const names1:string[] = ["abc","qwe"]
const names2:Array<string> = ["abc","qwe"]

export { }