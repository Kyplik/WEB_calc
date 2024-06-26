const calculator = (function () {
    let displayValue = "";
    let currentValue = null;
    let currentOperator = null;

    const operations = {
        "+": (a, b) => a + b,
        "-": (a, b) => a - b,
        "*": (a, b) => a * b,
        "/": (a, b) => {
            if (b === 0) {
                alert("Division by zero is not allowed!");
                clearDisplay();
                return null;
            }
            return a / b;
        },
        "^": (a, b) => Math.pow(a, b),
        sqrt: (a) => Math.sqrt(a),
    };

    function appendToDisplay(value) {
        displayValue += value;
        document.getElementById("display").value = displayValue;
    }

    function clearDisplay() {
        displayValue = "";
        currentValue = null;
        currentOperator = null;
        document.getElementById("display").value = "";
    }

    function operate(operator) {
        if (currentValue === null) {
            currentValue = parseFloat(displayValue);
            displayValue = "";
            currentOperator = operator;
        } else {
            currentValue = calculate();
            currentOperator = operator;
            displayValue = "";
        }
    }

    function calculate() {
        const value = parseFloat(displayValue);

        if (currentOperator in operations) {
            const result = operations[currentOperator](currentValue, value);

            if (result !== null) {
                currentValue = result;
                displayValue = currentValue.toString();
                document.getElementById("display").value = displayValue;
            }
        } else {
            alert("Invalid operator!");
            clearDisplay();
        }

        return currentValue;
    }

    return {
        appendToDisplay,
        clearDisplay,
        operate,
        calculate,
    };
})();