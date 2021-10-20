const {returnTwo, greeting, add, multiply, divide, subtract} = require('./functions')

it('Should return the integer 2', () => {
    expect(returnTwo()).toBe(2)
})

it('Should return the string "Hello Callie"', () => {
    expect(greeting('James')).toBe('Hello, James')

    expect(greeting('Jill')).toBe('Hello, Jill')
})

describe('Math Functions', () => {
    it('Should add num1 and num2 together and return the sum', () => {
        expect(add(1,2)).toBe(3)

        expect(add(5,9)).toBe(14)

        expect(add('5', '9')).toBe(14)
    });
    it('Should multiply num1 and num2 together and return the product', () => {
        expect(multiply(2,5)).toBe(10)
    });
    it('Should divide num1 by num2 and return the quotient', () => {
        expect(divide(30, 6)).toBe(5)
    });
    it('Should subtract num2 from num1 and return the difference', () => {
        expect(subtract(10,3)).toBe(7)
    });
});