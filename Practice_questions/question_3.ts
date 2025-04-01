// 🟢 基础练习
//
// 3️⃣ 可选参数 & 默认值
//
// 🔹 目标：掌握 TypeScript 可选参数的写法
// 任务：修改 greet 函数，让 name 变成可选参数，并加上默认值 "Guest"
// 💡 要求
// 	• name 变成可选参数
// 	• 如果 name 为空，默认值应该是 "Guest"

function greet(name: string = 'Guest'): string {
    return `Hello, ${name}!`;
}

console.log(greet());      // "Hello, Guest!"
console.log(greet("Tom")); // "Hello, Tom!"