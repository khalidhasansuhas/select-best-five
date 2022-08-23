document.getElementById('calculate-player-expense').addEventListener('click', function(){
    const perPlayerExpense = getInputValueUsingId('per-player-budget')

    let playerInList = document.getElementById('selected-player').childElementCount;
    const newPlayerExpenses = perPlayerExpense * playerInList;

    const previousPlayerExpenseElement = document.getElementById('player-expense');
    previousPlayerExpenseElement.innerText = newPlayerExpenses;
})