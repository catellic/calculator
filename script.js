import Calculator from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const displaySelector = document.querySelector('#display');
    const numberButtons = document.querySelectorAll('.buttons button');
    const operatorButtons = document.querySelectorAll('.operators button');
    const clearButton = document.querySelector('#btn-clear');

    let firstOperand = '';
    let operator = '';
    let secondOperand = '';
    let isOperatorSelected = false;
    let result = '';

    clearButton.addEventListener('click', () => {
        firstOperand = '';
        operator = '';
        secondOperand = '';
        isOperatorSelected = false;
        result = '';
        displaySelector.value = '';

        console.log('Calculator cleared');
    })

    numberButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (!isOperatorSelected) {
                if (firstOperand.includes('.') && event.target.textContent === '.') {
                    return
                } else {
                    firstOperand += event.target.textContent;
                    displaySelector.value = firstOperand;
                }

                console.log(`First Operand: ${firstOperand}`);
                console.log(`Operator: ${operator}`);

            } else {
                if (secondOperand.includes('.') && event.target.textContent === '.') {
                    return
                } else {
                    secondOperand += event.target.textContent;
                    displaySelector.value = `${firstOperand} ${operator} ${secondOperand}`;
                }
                

                console.log(`First Operand: ${firstOperand}`);
                console.log(`Second Operand: ${secondOperand}`);
                console.log(`Operator: ${operator}`);

            }
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (firstOperand !== '' && !isOperatorSelected) {
                operator = event.target.textContent;
                isOperatorSelected = true;
                displaySelector.value = `${firstOperand} ${operator}`;
                secondOperand = '';

                console.log(`First Operand: ${firstOperand}`);
                console.log(`Second Operand: ${secondOperand}`);
                console.log(`Operator: ${operator}`);

            } else if (secondOperand !== '' && isOperatorSelected) {
                result = Calculator.operate(operator, firstOperand, secondOperand);
                displaySelector.value = result;
                firstOperand = '';
                operator = '';
                secondOperand = '';
                isOperatorSelected = false;

                console.log(`Result: ${result}`);
            }
        });
    });
});