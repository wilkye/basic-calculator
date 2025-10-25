const inputField = document.querySelector(".input-field");

let add = (a, b) => {
    return a + b;
}

let sub = (a, b) => {
    return a - b;
}

let mult = (a, b) => {
    let final = a * b;
    return final.toFixed(6);
}

let divide = (a, b) => {
    let final = a / b;
    return final.toFixed(6);
}

let operate = (a, b, c) => {
    switch (c) {
        case "+":
            return add(a, b);
            break;
        case "-":
            return sub(a, b);
            break;
        case "x":
            return mult(a, b);
            break;
        case "/":
            return divide(a, b);
            break;
    }
}

let outputString = "";
let parseInput = (input) => {
    if (input === "c") {
        outputString = "";
        inputField.textContent = outputString;
        return;
    }
    if (input === "=") {
        // Split the outputString into operands and operators.
        // Use a number token that allows decimals so "3.14" or ".5" are kept as one token.
        let tokens = outputString.match(/(\d*\.?\d+|\+|\-|\x|\/)/g);
        if (!tokens) {
            console.log("invalid expression");
            return;
        }

        let a, operator, b;
        if (tokens.length === 3) {
            // a op b
            a = parseFloat(tokens[0]);
            operator = tokens[1];
            b = parseFloat(tokens[2]);
        } else if (tokens.length === 4 && tokens[0] === "-") {
            // -a op b
            a = parseFloat(tokens[0] + tokens[1]);
            operator = tokens[2];
            b = parseFloat(tokens[3]);
        } else if (tokens.length === 4 && tokens[2] === "-") {
            // a op -b
            a = parseFloat(tokens[0]);
            operator = tokens[1];
            b = parseFloat(tokens[2] + tokens[3]);
        } else if (tokens.length === 5 && tokens[0] === "-" && tokens[3] === "-") {
            // -a op -b
            a = parseFloat(tokens[0] + tokens[1]);
            operator = tokens[2];
            b = parseFloat(tokens[3] + tokens[4]);
        } else {
            console.log("invalid expression");
            console.log(tokens);
            return;
        }

        let result = operate(a, b, operator);
        outputString = result.toString();
        inputField.textContent = outputString;
        return;
    }

    if (isNaN(input)) {
        // If the output is empty, only allow a leading minus for negative numbers
        if (outputString.length === 0) {
            if (input === "-") {
                outputString += input;
                inputField.textContent = outputString;
                return;
            } else {
                console.log("not a number");
                return;
            }
        }

        const lastChar = outputString[outputString.length - 1];
        if (/[+\-x\/]/.test(lastChar)) {
            // Allow a '-' immediately after an operator to start a negative second operand
            if (input === "-" && lastChar !== "-") {
                outputString += input;
                inputField.textContent = outputString;
                return;
            }
            console.log("already have operator");
            return;
        }

        // Prevent entering a second operator anywhere (ignore a leading '-' for first operand)
        const hasOperator = /[+\-x\/]/.test(outputString.replace(/^-/, ""));
        if (hasOperator) {
            console.log("already have operator");
            return;
        }
    }

    outputString += input;
    inputField.textContent = outputString;
}

let assignBtns = (btns) => {
    btns.forEach(btn => {
        btn.addEventListener("click", () => {
            parseInput(btn.textContent);
        });
    });
}

const calcBtns = document.querySelectorAll(".calc-btn");

assignBtns(calcBtns);