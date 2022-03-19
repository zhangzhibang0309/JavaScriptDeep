// hook: useState
// const [counter,setCounter] = useState(10)

function useState<T>(state: T): [T, (newValue: T) => void] {
    let currentState = state

    const changeState = (newState: T) => {
        currentState = newState
    }

    const tuple: [T, (newState: T) => void] = [currentState, changeState]

    return tuple
}

const [counter, setCounter] = useState(10)
setCounter(1000)

const [title, setTitle] = useState("abc")

const [flag, setFlag] = useState(true)