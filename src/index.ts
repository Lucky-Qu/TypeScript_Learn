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
