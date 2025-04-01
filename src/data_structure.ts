//基本数据类型
//number
let num: number = 717
//string
let str: string = 'LuckyQu'
//boolean
let isMale: boolean = true
//null
let n: null = null
//undefined
let u: undefined = undefined
//symbol
// let s: symbol = aSample()
console.log(num, str, isMale, n, u)
//引用数据类型
//数组
let numArray: number[] = [7, 1, 7]
let strArray: Array<string> = ['LuckyQu', '20岁']
console.log(numArray, strArray)

//函数
function add(num1: number, num2: number): number {
    return num1 + num2
}

console.log(add(11, 22))
const addFn = (num1: number, str: string): string => {
    return num1 + str
}
console.log(addFn(20, 'LuckyQu'))

//带可选参数的函数
function aFnWithOptional(name: string, age?: number): string {
    return name + age
}

console.log(aFnWithOptional('LuckyQu'))
console.log(aFnWithOptional('LuckyQu', 20))
//对象Object
let person: {
    name: string
    age: number
    say: () => void
    greet(name: string): void
} = {
    name: 'LuckyQu',
    age: 20,
    say: () => {
        console.log("Hi! Im LuckyQu")
    },
    greet(name: string) {
        console.log("Hi!", name)
    }
}
person.say()
person.greet("LuckyKai")
console.log(person.name, person.age)
//联合数据类型
//表示msg1是一个数组，数组内的值类型可能为number，string
let msg1: (number | string)[] = [717, "LuckyQu"]
console.log(msg1)
//表示msg2是一个数字或字符串或数组
let msg2: number | string | number[] = [123, 456]
console.log(msg2)
//使用type关键字来创建类型别名
type msg3 = (number | string)[]
const msg4: msg3 = [123, 23]
console.log(msg4)

//使用interface来定义一个接口，接口之间可以继承
interface person {
    name: string
    age: number
    say: () => void
}

interface worker extends person {
    work: () => void
}

let worker1: worker = {
    name: "LuckyQu",
    age: 20,
    say(): void {
        console.log("我是", this.name)
    },
    work(): void {
        console.log("我会工作")
    }
}
worker1.say()
worker1.work()
//元组tuple,是一个指定了类型以及元素的数量的一种数据结构
let coordinate: [number, string, number, string] = [23, 'N', 45, 'S']
console.log(coordinate)
//字面量，使用const关键字
const pi: number = 3.1415926
//此时再pi = 123 会报错，字面量定义后不允许改变值
console.log(pi)

//枚举 enum
enum sex {"male" = 0, "female" = 1}

function speakSex(mySex: sex): void {
    if (mySex == 0) {
        console.log("male")
    } else {
        console.log("female")
    }
}

speakSex(sex.male)
speakSex(sex.female)
