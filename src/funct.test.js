const { reverseString, capitalize, Calculator } = require('./functions');


test('converts the first letter of the string to capital letter', () => {
expect (capitalize("hello")).toBe("Hello");
});

test('reverse a string', () => {

    expect (reverseString("world")).toBe("dlrow")

});

describe ('a calculator that performs 4 basics operations', () => { 

const cal = new Calculator();

test ('a sum operator that expects to return the result of a + b', () => {
expect (cal.add(5, 5)).toBe(10)

})

test ('a subtract operator that expects to return the result of a - b', () =>{
expect (cal.subtract(6, 2)).toBe(4)


})

test ('a divide operator that expects to return the result of a / b and returns error if try to divide by 0', () => {
expect (cal.divide(10, 2)).toBe(5)

})

test ('a multiplier operator that expects to return the result of a * b', () => {
expect (cal.multiply(5, 2)).toBe(10)

})


})