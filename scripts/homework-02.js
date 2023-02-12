let oneNumber = prompt('Введите первое число:');
let twoNumber = prompt('Введите второе число:');

oneNumber = parseInt(oneNumber);
twoNumber = parseInt(twoNumber);

let culc = oneNumber + twoNumber;

document.write(`Выведи мне информацию на страницу: `)
document.write(`сумма чисел = ${culc.toFixed(1)}; `);

culc = oneNumber - twoNumber;
document.write(`разность чисел = ${culc.toFixed(1)}; `);

culc = oneNumber / twoNumber;
document.write(`частность чисел = ${culc.toFixed(1)}; `);

culc = oneNumber * twoNumber;
document.write(`произведение чисел = ${culc.toFixed(1)}; `);

culc = oneNumber % twoNumber
document.write(`остаток от деления = ${culc.toFixed(2)}; `);


