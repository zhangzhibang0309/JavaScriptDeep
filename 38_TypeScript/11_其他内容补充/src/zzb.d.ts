declare module 'lodash' {
    export function join(arr: any[]): void
}

declare let zzbName: string
declare let age: number
declare let zzbHeight: number

declare function zzbFoo(): void

declare class Person {
    name: string
    age: number

    constructor(name: string, age: number)
}


// 声明文件
declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.svg'

// 声明命名空间