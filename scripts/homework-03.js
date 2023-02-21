const purpose = +prompt('Сколько вы хотите накопить?');
console.log(purpose);

const salary = +prompt('Ваш месячный доход?');
console.log(salary);

const expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую (пример: "питание, проезд")?')
.split(',').map((item) => {
const trimmedtItem = item.trim();
    return `${ trimmedtItem[0].toLocaleUpperCase() }${ trimmedtItem.slice(1) }`});
console.log(expenses);

const requiredExpenses = +prompt('Во сколько обойдуться обязательные статьи расходов?');
console.log(requiredExpenses);

const hasDeposit = confirm('Есть ли у вас вклад в банке? Да/Нет');
console.log(`${hasDeposit ? 'Наличие вклада: да' : 'Наличие вклада: нет'}`);

let budgePerMonth = salary - requiredExpenses;
console.log(`Расходы на месяц составляют: ${budgePerMonth} руб.`)

let budgetPerDay = Math.floor(budgePerMonth / 30);
console.log(`Ежедневные расходы составляют: ${budgetPerDay} руб.`)

const months = Math.ceil(purpose / budgePerMonth);
console.log(`Копить осталось ${months} месяц (-ев)`);

switch(true) {
    case budgetPerDay >= 6000 :
        console.log(`Высокий уровень дохода`);
        break;
    case budgetPerDay >= 3000 :
        console.log(`Средний уровень дохода`);
        break;
    case budgetPerDay >= 0 : 
        console.log(`Низкий уровень дохода`);
        break;
    default :
        console.log(`Что-то пошло не так!`);          
}