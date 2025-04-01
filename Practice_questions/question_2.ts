// 🟢 基础练习
//
// 2️⃣ 函数类型
//
// 🔹 目标：熟悉 TypeScript 中的函数类型
// 任务：给 add 和 multiply 函数加上正确的 TypeScript 类型。
// 💡 要求
// 	• 限制 a 和 b 只能是 number
// 	• 让 TypeScript 自动推断返回值类型

function add(a: number, b: number) {
    return a + b;
}

function multiply(a: number, b: number) {
    return a * b;
}

console.log(add(5, 3)); // 8
console.log(multiply(5, 3)); // 15