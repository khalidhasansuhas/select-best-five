document.getElementById('calculate-total-expense').addEventListener('click',function(){
    const previousPlayerExpenseElement = document.getElementById('player-expense');
    const previousPlayerExpenseElementString = previousPlayerExpenseElement.innerText;
    const playerExpense = parseInt(previousPlayerExpenseElementString);

    const managerExpense = getInputValueUsingId('manager-expense');

    const coachExpense = getInputValueUsingId('coach-expense');

    if(playerExpense <= 0){
        alert('Player expense can not be zero')
    }
    else if(isNaN(managerExpense)){
        alert ('Please fill Manager input with Valid Number');
    }
    else if(isNaN(coachExpense)){
        alert ('Please Fill Coach Input with Valid Number')
    }
    else{
        const newTotalExpenses = playerExpense + managerExpense + coachExpense;

        const previousTotalExpenseElement = document.getElementById('total-expense');
        previousTotalExpenseElement.innerText = newTotalExpenses;
    }

})