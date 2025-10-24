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