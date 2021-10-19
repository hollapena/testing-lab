module.exports = {
    returnTwo: () => {
        return 2
    }, 
    greeting: (name) => {
        return `Hello, ${name}`
    },
    add: (num1, num2) => {
        sum = num1+num2
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