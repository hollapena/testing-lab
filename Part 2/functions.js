module.exports = {
    returnTwo: () => {
        return 2
    }, 
    greeting: (name) => {
        return `Hello, ${name}`
    },
    add: (num1, num2) => {
        let newNum1 = +num1
        let newNum2 = +num2
        sum = newNum1+newNum2
        return sum
    }, 
    multiply: (num1, num2) => {
        product = num1*num2
        return product
    }, 
    divide: (num1, num2) => {
        quotient = num1/num2
        return quotient
    },
    subtract: (num1, num2) => {
        difference = num1-num2
        return difference
    }
}
