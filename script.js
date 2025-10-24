const inputField = document.querySelector(".input-field");

let add = (a, b) => {
    return a + b;
}

let sub = (a, b) => {
    return a - b;
}

let mult = (a, b) => {
    return a * b;
}

let divide = (a, b) => {
    return a / b;
}

let operate = (a, b, c) => {
    switch (c) {
        case "+":
            add(a, b);
            break;
        case "-":
            sub(a, b);
            break;
        case "*":
            mult(a, b);
            break;
        case "/":
            divide(a, b);
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
    if (isNaN(input) && outputString.length === 0) {
        console.log("not a number");
    } else {
        outputString += input;
        inputField.textContent = outputString;
    }
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