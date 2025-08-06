
const readline = require("readline")
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

operator = ["+", "-", "*", "/"]
r1.question("enter the equation  ", (equation) => {
    operator.forEach(op => {
        if (equation.includes(op)) {
            myarray = equation.split(op)
            console.log(myarray)
            a = parseFloat(myarray[0])
            console.log(a)

            b = parseFloat(myarray[1])
            console.log(b)
            console.log(op)
            let result;

            switch (op) {
                case "+":
                    result = a + b
                    break;
                case "-":
                    result = a - b;
                    break;
                case "*":
                    result = a * b;
                    break;
                case "/":
                    result = a / b;
                    break;
                default:
                    console.log("invalid operator")
            }
            console.log("Result : ", result)
        }
    });
    r1.close()
})
