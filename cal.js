const readline = require("readline")
const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


r1.question("enter 1st nuumber  ", (num1) => {
    r1.question("enter operator +,-,/,* ", (op) => {
        r1.question("enter second number ", (num2 => {

            const a = parseFloat(num1)
            const b = parseFloat(num2)
            let result;
       

            if (isNaN(a) || isNaN(b)) {
                console.log("invalid number, pls enter valid numbers  ")
            }
            else {
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
                console.log("result   " + result)
            }
            r1.close()


        }))

    })
})
