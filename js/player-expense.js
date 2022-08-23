document.getElementById('calculate-player-expense').addEventListener('click', function(){
    const perPlayerExpense = getInputValueUsingId('per-player-budget')

    let playerInList = document.getElementById('selected-player').childElementCount;

    if(playerInList === 0){
        alert('Please Select Players')
    }
    else if(isNaN(perPlayerExpense)){
        alert ('please set per Player budget in number')
    }
    else{
        const newPlayerExpenses = perPlayerExpense * playerInList;

        const previousPlayerExpenseElement = document.getElementById('player-expense');
        previousPlayerExpenseElement.innerText = newPlayerExpenses;
    }

})