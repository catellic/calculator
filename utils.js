class Calculator {
    static add(a, b) {
        return a + b;
    }

    static subtract(a, b) {
        return a - b;
    }

    static multiply(a, b) {
        return a * b;
    }

    static divide(a, b) {
        if (b === 0) {
            return "Error: Division by zero";
        }
        return a / b;
    }

    static operate(operator, a, b) {
        if (!isNaN(a) && !isNaN(b)) {
            a = parseFloat(a);
            b = parseFloat(b);
            switch (operator) {
                case '+':
                    return Calculator.add(a, b);
                case '-':
                    return Calculator.subtract(a, b);
                case 'x':
                    return Calculator.multiply(a, b);
                case ':':
                    return Calculator.divide(a, b);
                default:
                    return "Invalid operator";
            }
        }
    }
}


export default Calculator;
