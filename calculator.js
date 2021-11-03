// get inputs
const inputs = require('./inputs.js')

args = inputs.getArgs()

if (!args[0] || !args[1] || !args[2]) {
    console.log(`Please check your inputs. First input is the command, second and third inputs should be a number.`)
    return
}

let command = args[0]
let num1 = Number(args[1])
let num2 = Number(args[2])

if  (typeof num1 != 'number' || typeof num2 != 'number') {
    console.log(`Please check your inputs. The second and third input should be numbers.`)
    return
} 

let calc = {
    add(a, b) {
        let result = a + b
        console.log(`${a} + ${b} = ${result}`)
    },

    subtract(a, b) {
        let result = a - b
        console.log(`${a} - ${b} = ${result}`)
    },

    multiply(a, b) {
        let result = a * b
        console.log(`${a} * ${b} = ${result}`)
    },

    divide(a, b) {
        let result = a / b
        console.log(`${a} / ${b} = ${result}`)
    },

    remainder(a, b) {
        let result = a % b
        console.log(`The remainder of ${a} / ${b} is ${result}`)
    },

    exponential(a, b) {
        let result = a ** b
        console.log(`${a} ^ ${b} = ${result}`)
    }
}

try {
    calc[command](num1, num2)
} catch(err) {
    console.log(`Command not found. Commands are add, subtract, multiply, divide, remainder, and exponents`)
}