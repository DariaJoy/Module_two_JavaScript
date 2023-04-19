'use strict'

let money = 0 
let profit = "фриланс"
let extraMoney = 0 
let expenses =  "питание, проезд"
let expensesAmount = 0 
let purpose = 0
let period = 12
let deposit = true



const submitBtn = document.querySelector('#onsubmit');
    submitBtn.addEventListener ('click', getTargetMonth)

function getAccumulatedIncome () {
    const sumMoneyElement = document.querySelector('#sumMoney');
    const result = (money + extraMoney) - expensesAmount;
    sumMoneyElement.textContent = result.toString();
    return result;   
}

function getTargetMonth(event) {
    event.preventDefault();
    const accumulatedIncome = getAccumulatedIncome();
    const sumMoneyPurpose = document.querySelector('#sumMoneyPurpose');
    sumMoneyPurpose.textContent = purpose
    const months = document.querySelector('#purpose');
    const result = Math.ceil(purpose / accumulatedIncome);
    months.textContent = (result).toString();
    const incomeLevel = document.querySelector('#incomeLevel')
    const budgetDay = document.querySelector('#sumMoneyDay');
    const resultBudgetDay = Math.ceil(accumulatedIncome / 30);
    budgetDay.textContent = +resultBudgetDay;
    if (resultBudgetDay >= 6000) {
        incomeLevel.textContent = 'высокий';
        } else if (resultBudgetDay < 6000 && resultBudgetDay >= 3000) {
            incomeLevel.textContent = 'средний';
        } else if (resultBudgetDay < 3000 && resultBudgetDay >= 0) {
            incomeLevel.textContent = 'низкий';
        } 
};

function onInputMoney ({target}) {
    const {value} = target;
    console.log(value);
    money = +value;
}

function onInputExtraMoney ({target}) {
    const {value} = target;
    console.log(value);
    extraMoney = +value;
}

function onInputExpensesAmout ({target}) {
    const {value} = target;
    console.log(value);
    expensesAmount = +value;
}

function onInputPurpose ({target}) {
    const {value} = target;
    console.log(value);
    purpose = +value;
}
