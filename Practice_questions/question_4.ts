// 🟡 进阶练习
//
// 4️⃣ 泛型（Generic）
//
// 🔹 目标：理解泛型如何使代码更灵活
// 任务：让 identity 函数适用于 **任何类型**
// 💡 要求
// 	• 让 identity 函数支持 number | string | boolean | any
// 	• 不能使用 any，必须使用泛型 T 代替

function identity<T>(value: T): T {
    return value;
}

console.log(identity(10));      // 10
console.log(identity("hello")); // "hello"
console.log(identity(true));    // true