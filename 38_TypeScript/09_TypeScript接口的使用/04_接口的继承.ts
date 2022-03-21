interface ISwim {
    swimming: () => void
}

interface IFly {
    flying: () => void
}

// 接口继承接口
interface IAction extends ISwim, IFly {

}

const action: IAction = {
    swimming() {

    },
    flying() {

    }
}