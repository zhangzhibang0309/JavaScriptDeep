enum Direction {
    LEFT,
    RIGHT,
    TOP,
    BOTTOM
}

function turnDirection(direction: Direction) {
    switch (direction) {
        case Direction.LEFT:
            console.log("👈")
            break;
        case Direction.RIGHT:
            console.log("👉")
            break;
        case Direction.TOP:
            console.log("👆")
            break;
        case Direction.BOTTOM:
            console.log("👇")
            break;
        default:
            const foo: never = direction
            break
    }
}
turnDirection(Direction.LEFT)
turnDirection(Direction.RIGHT)
turnDirection(Direction.TOP)
turnDirection(Direction.BOTTOM)

export { }