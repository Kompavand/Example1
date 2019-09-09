'use strict';

let money, time;

money = prompt('Ваш бюджет на месяц?', '');
time = prompt('Введите дату в формате YYYY-MM-DD', '');

let appData = {
    money: money,
    timeData: time,
    expenses: {},
    optionalExpenses: null,
    income: [],
    savings: false
};

let spendTitle = prompt('Введите обязательную статью расходов в этом месяце', '');
let spendValue = prompt('Во сколько обойдется?', '');

appData.expenses[spendTitle] = spendValue;

let moneyForDay = appData.expenses[spendTitle] / 30;

alert('Бюджет на 1 день: ' + moneyForDay);
