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

//ДЗ 08

const checkNumber = (question) => {
    const answer = Number.parseFloat(prompt(question));

    while (isNaN(answer)) {
        alert(`Введите число!`)
        return checkNumber(question)
    } return answer
};    

const init = () => {
    const salary = checkNumber('Ваш месячный доход?');
        console.log(salary);

    const extraMoney = checkNumber(`Назовите возможный доход за ваши дополнительные работы?`);
        console.log(extraMoney);

    const expensesCategories = prompt('Перечислите возможные расходы за рассчитываемый период через запятую (пример: "питание, проезд")?')
        .split(',').map((item) => {
        const trimmedtItem = item.trim();
        return `${ trimmedtItem[0].toLocaleUpperCase() }${ trimmedtItem.slice(1) }`});
        console.log(expensesCategories);

    const requiredExpenses = checkNumber('Во сколько обойдуться обязательные статьи расходов?');
        console.log(requiredExpenses);

    const accumulatedIncome = getAccumulatedIncome(salary, extraMoney, requiredExpenses);

    const purpose = checkNumber('Сколько вы хотите накопить?');
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

    console.log(months > 0
        ? `Ваш бюджет на месяц с учетом ваших расходовсоставляет: ${accumulatedIncome}. Ваша цель накопить ${purpose} с учетом всех ваших расходов будет достигнута через ${months} месяца (-ев). Дневной бюджет: ${budgetPerDay}`
        : 'Ваша цель не может быть достигнута');
};

init();


//Дополнительное ДЗ-08

const arr = ['9348', '400909', '29898', '40283', '3987', '99665', '8987'];

console.log(arr.filter(number => ['2', '4'].includes(number[0])));


const cutText = (text) => {
    if (typeof text === 'string' ) {
        text = text.trim();
        if (text.length > 30 ) {
            text = text.slice(0, 30).concat('...');
        } return text;
    } else console.log('Введитие текст!')
};
const resaltcutText = cutText(`Lorem ipsum dolor, sit amet consectetur adipisicing elit. Hic incidunt ipsam facere aperiam obcaecati aut ad delectus iste exercitationem qui!`);

console.log(resaltcutText)
