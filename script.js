import Calculator from './utils.js';

document.addEventListener('DOMContentLoaded', () => {
    const displaySelector = document.querySelector('#display');
    const numberButtons = document.querySelectorAll('.buttons button');
    const operatorButtons = document.querySelectorAll('.operators button');

    let firstOperand = '';
    let operator = '';
    let secondOperand = '';
    let isOperatorSelected = false;

    numberButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (!isOperatorSelected) {
                firstOperand += event.target.textContent;
                displaySelector.value = firstOperand;
            } else {
                secondOperand += event.target.textContent;
                displaySelector.value = `${firstOperand} ${operator} ${secondOperand}`;
            }
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            if (firstOperand !== '') {
                operator = event.target.textContent;
                isOperatorSelected = true;
                displaySelector.value = `${firstOperand} ${operator}`;
                secondOperand = '';
            }
        });
    });
}, 1000);