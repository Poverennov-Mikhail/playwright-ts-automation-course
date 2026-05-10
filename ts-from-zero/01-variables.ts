// ======================================
// 1. Переменные и типы данных
// ======================================

// let — можно менять значение
let age: number = 30;
age = 31;                    // можно изменить

// const — нельзя менять значение (рекомендуется использовать чаще)
const firstName: string = "Михаил";
// firstName = "Алексей";    // ошибка!

let isLogged: boolean = true;
let price: number = 199.99;

// Если не указывать тип — TypeScript сам догадается (Type Inference)
let lastName = "Повереннов";   // автоматически станет string
let isActive = false;          // автоматически boolean

console.log("Имя:", firstName);
console.log("Возраст:", age);