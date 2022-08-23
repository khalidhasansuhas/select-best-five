document.getElementById('calculate-total-expense').addEventListener('click',function(){
    const previousPlayerExpenseElement = document.getElementById('player-expense');
    const previousPlayerExpenseElementString = previousPlayerExpenseElement.innerText;
    const playerExpense = parseInt(previousPlayerExpenseElementString);

    const managerExpense = getInputValueUsingId('manager-expense');

    const coachExpense = getInputValueUsingId('coach-expense');

    const newTotalExpenses = playerExpense + managerExpense + coachExpense;

    const previousTotalExpenseElement = document.getElementById('total-expense');
    previousTotalExpenseElement.innerText = newTotalExpenses;
})