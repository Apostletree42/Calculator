// Calculator Backend

let firstOperand = '';
let currentOperation = '';
let secondOperand = '';

function appendDigit(digit) {
    if (currentOperation === '') {
        firstOperand += digit;
    } else {
        secondOperand += digit;
    }
    updateDisplay();
}

function appendOperation(operation) {
    if (currentOperation === '' && firstOperand !== '') {
        currentOperation = operation;
        updateDisplay();
    }
}

function clearDisplay() {
    firstOperand = '';
    currentOperation = '';
    secondOperand = '';
    updateDisplay();
}

function deleteLast() {
    if (currentOperation === '') {
        firstOperand = firstOperand.slice(0, -1);
    } else {
        secondOperand = secondOperand.slice(0, -1);
    }
    updateDisplay();
}

function calculate() {
    if (currentOperation !== '' && secondOperand !== '') {
        let result;
        const num1 = Number(firstOperand);
        const num2 = Number(secondOperand);
        
        switch (currentOperation) {
            case '+':
                result = num1 + num2;
                break;
            case '-':
                result = num1 - num2;
                break;
            case '*':
                result = num1 * num2;
                break;
            case '/':
                result = num1 / num2;
                break;
            default:
                break;
        }
        
        firstOperand = result.toString();
        currentOperation = '';
        secondOperand = '';
        updateDisplay();
    }
}


function updateDisplay() {
    const display = document.getElementById('calculator-display');
    display.children[0].textContent = firstOperand;
    display.children[1].textContent = currentOperation;
    display.children[2].textContent = secondOperand;
}
