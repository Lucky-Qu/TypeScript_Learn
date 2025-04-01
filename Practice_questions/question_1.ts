// 🟢 基础练习
//
// 1️⃣ 类型定义 & 类型推断
//
// 🔹 目标：熟悉 TypeScript 基本类型
// 任务：补全 describePerson 函数，使其参数符合 TypeScript 规则。
//💡 要求
// 	•	person.name 必须是 string
// 	•	person.age 必须是 number
// 	•	尝试让 age 变成 string，看 TypeScript 会不会报错
function describePerson(person: {name: string, age: number}/* 这里补全类型 */) {
    return `${person.name} is ${person.age} years old.`;
}

const p = { name: "Alice", age: 25 };
console.log(describePerson(p));