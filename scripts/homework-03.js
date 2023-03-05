//ДЗ03
// const purpose = +prompt('Сколько вы хотите накопить?');
// console.log(purpose);

// const salary = +prompt('Ваш месячный доход?');
// console.log(salary);

// const expenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую (пример: "питание, проезд")?')
// .split(',').map((item) => {
// const trimmedtItem = item.trim();
//     return `${ trimmedtItem[0].toLocaleUpperCase() }${ trimmedtItem.slice(1) }`});
// console.log(expenses);

// const requiredExpenses = +prompt('Во сколько обойдуться обязательные статьи расходов?');
// console.log(requiredExpenses);

// const hasDeposit = confirm('Есть ли у вас вклад в банке? Да/Нет');
// console.log(`${hasDeposit ? 'Наличие вклада: да' : 'Наличие вклада: нет'}`);

// let budgePerMonth = salary - requiredExpenses;
// console.log(`Расходы на месяц составляют: ${budgePerMonth} руб.`)

// let budgetPerDay = Math.floor(budgePerMonth / 30);
// console.log(`Ежедневные расходы составляют: ${budgetPerDay} руб.`)

// const months = Math.ceil(purpose / budgePerMonth);
// console.log(`Копить осталось ${months} месяц (-ев)`);

// switch(true) {
//     case budgetPerDay >= 6000 :
//         console.log(`Высокий уровень дохода`);
//         break;
//     case budgetPerDay >= 3000 :
//         console.log(`Средний уровень дохода`);
//         break;
//     case budgetPerDay >= 0 : 
//         console.log(`Низкий уровень дохода`);
//         break;
//     default :
//         console.log(`Что-то пошло не так!`);          
// }

//ДЗ05

//ДЗ 05

const getAccumulatedIncome = (salary, extraMoney, requiredExpenses) =>
    (salary + extraMoney) - requiredExpenses; 

const getTargetMonth = (accumulatedIncome, purpose) => 
    Math.ceil(purpose / accumulatedIncome);

const init = () => {
    const salary = +prompt('Ваш месячный доход?');
        console.log(salary);

    const extraMoney = +prompt(`Назовите возможный доход за ваши дополнительные работы?`);
        console.log(extraMoney);

    const expensesCategories = prompt('Перечислите возможные расходы за рассчитываемый период через запятую (пример: "питание, проезд")?')
        .split(',').map((item) => {
        const trimmedtItem = item.trim();
        return `${ trimmedtItem[0].toLocaleUpperCase() }${ trimmedtItem.slice(1) }`});
        console.log(expensesCategories);

    const requiredExpenses = +prompt('Во сколько обойдуться обязательные статьи расходов?');
        console.log(requiredExpenses);

    const accumulatedIncome = getAccumulatedIncome(salary, extraMoney, requiredExpenses);

    const purpose = +prompt('Сколько вы хотите накопить?');
        console.log(purpose);

    const months = getTargetMonth(accumulatedIncome, purpose);
        console.log(`Копить осталось ${months} месяц (-ев)`);
    
    const budgetPerDay = accumulatedIncome / 30;

    if (budgetPerDay >= 6000) {
        console.log(`Высокий уровень дохода`);
    } else if (budgetPerDay < 6000 && budgetPerDay >= 3000) {
        console.log(`Средний уровень дохода`);
    } else if (budgetPerDay < 3000 && budgetPerDay >= 0) {
        console.log(`Средний уровень дохода`);
    } else {
        console.log(`Что-то пошло не так!`);
    }    

    console.clear;

    console.log(`Ваш бюджет на месяц с учетом ваших расходовсоставляет: ${accumulatedIncome}. Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через ${months} месяца (-ев). Дневной бюджет: ${budgetPerDay}`);
};

init();


