let start = document.getElementById("start"),
    budgetValue = document.getElementsByClassName("budget-value"),
    daybudgetValue = document.getElementsByClassName("daybudget-value"),
    levelValue = document.getElementsByClassName("level-value"),
    expensesValue = document.getElementsByClassName("expenses-value"),
    optionalExpensesValue = document.getElementsByClassName("optionalexpenses-value"),
    incomeValue = document.getElementsByClassName("income-value"),
    monthSavingsValue = document.getElementsByClassName("monthsavings-value"),
    yearSavingsValue = document.getElementsByClassName("yearsavings-value"),
    expensesItem = document.getElementsByClassName("expenses-item"),
    buttons = document.getElementsByTagName('button'),
    accept1 = document.querySelector('.expenses-item-btn'),
    accept2 = document.querySelector('.optionalexpenses-btn'),
    count = document.querySelector('.count-budget-btn'),
    optionalExpensesItem = document.querySelectorAll("optionalexpenses-item"),
    income = document.querySelector('#income'),
    savings = document.querySelector('#savings'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');