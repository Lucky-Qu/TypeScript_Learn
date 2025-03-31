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
console.log(num,str,isMale,n,u)
//引用数据类型
//数组
let numArray: number[] = [7,1,7]
let strArray: Array<string> = ['LuckyQu','20岁']
console.log(numArray,strArray)
//函数
function add(num1: number, num2: number): number{
    return num1 + num2
}
console.log(add(11,22))
const addFn = (num1: number, str: string): string => {
    return num1 + str
}
console.log(addFn(20,'LuckyQu'))
//带可选参数的函数
function aFnWithOptional(name: string, age?: number): string{
    return name + age
}
console.log(aFnWithOptional('LuckyQu'))
console.log(aFnWithOptional('LuckyQu',20))
//对象Object
let person: {
    name: string
    age: number
    say:() => void
    greet(name: string):void
} = {
    name: 'LuckyQu',
    age: 20,
    say:() =>{
        console.log("Hi! Im LuckyQu")
    },
    greet(name: string) {
        console.log("Hi!",name)
    }
}
person.say()
person.greet("LuckyKai")
console.log(person.name,person.age)
//联合数据类型
//表示msg1是一个数组，数组内的值类型可能为number，string
let msg1: (number | string)[] = [717,"LuckyQu"]
console.log(msg1)
//表示msg2是一个数字或字符串或数组
let msg2: number | string | number[] = [123,456]
console.log(msg2)