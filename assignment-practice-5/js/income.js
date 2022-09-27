const totalExpensesText = document.getElementById('total-expenses-text');
const BalanceText = document.getElementById('balance-text');
const savingAmountText = document.getElementById('saving-text');
const remainingBalanceText = document.getElementById('remaining-text');

// All input text value count function
function allInputText(inputText) {
    const inputTexts = document.getElementById(inputText);
    const inputTextString = inputTexts.value;
    const inputValue = parseInt(inputTextString);
    return inputValue
}
// set text value function
function setTextElement(element, value){
    const setText = document.getElementById(element)
    setText.innerText = value;
}

// total Expenses value function
function totalExpenses() {
    const footInput = allInputText('food-input');
    const rentInput = allInputText('rent-input');
    const clothesInput = allInputText('clothes-input');
    const totalExpensesAmount = footInput + rentInput + clothesInput;

    if(Number.isNaN(totalExpensesAmount)){
        alert('Expenses input is valid number')
        return ;
    }
    else if(footInput < 0 || rentInput < 0 || clothesInput < 0){
        alert('Expenses input will greater than zero')
    }
    return totalExpensesAmount;
}

// balance text calculate  function
function balanceText() { 
    const incomeInput = allInputText('income-input');
    if(!incomeInput){
        alert('Income input is valid number')
        return;
    }
    else if(incomeInput < 0){
        alert('Income input will greater than zero')
        return
    }
    const totalExpensesAmount = totalExpenses(true);

    if(incomeInput < totalExpensesAmount){
        alert('Income balance is less expenses balance')
        return;
    }
    const lastBalance = incomeInput - totalExpensesAmount;

    setTextElement('total-expenses-text',totalExpensesAmount)

    return lastBalance;
}

// calculate button 

document.getElementById('btn-expenses-calculate').addEventListener('click', function () {
    const lastBalance = balanceText()
        BalanceText.innerText = lastBalance;
})

// saving amount and remaining amount calculate function
document.getElementById('btn-save').addEventListener('click', function () {
    const incomeInput = allInputText('income-input');
    const savingInput = allInputText('saving-input');
    if(!savingInput){
        alert('Enter the percentage number')
        return;
    }
    else if((savingInput >= 100) || savingInput <= 0) {
        alert('please enter a percentage number less 100 and greater than 0')
        return;
    } 
    const balance = balanceText()
    const savingAmount = ((savingInput / 100) * incomeInput).toFixed(2);
    const remainingBalance = (balance - savingAmount).toFixed(2);

    setTextElement('saving-text',savingAmount);
    setTextElement('remaining-text',remainingBalance);

})