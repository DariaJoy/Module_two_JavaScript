console.log('---------homework-01---------');
const money = 30000;
const profit = 'Фриланс';
const expenses = 'Еда, Одежда, Кружки, Транспорт';
const purpose = 100000;
const period = 6;

console.log(typeof money, typeof profit);

console.log(expenses.length);

console.log(`Период равен ${period}-ти месяцам`);

console.log(`Цель заработать ${purpose} рублей`);

let budgetDay = money / 30;

console.log(budgetDay);

console.log('-------homework-01_hard------');

let expenses1 = expenses.toLowerCase()

let arr = expenses1.split(', ');

console.log(arr);