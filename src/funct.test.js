const {
  reverseString,
  capitalize,
  Calculator,
  caesarCipher,
  analyzeArray
} = require("./functions");

test("converts the first letter of the string to capital letter", () => {
  expect(capitalize("hello")).toBe("Hello");
});

test("reverse a string", () => {
  expect(reverseString("world")).toBe("dlrow");
});

describe("a calculator that performs 4 basics operations", () => {
  const cal = new Calculator();

  test("a sum operator that expects to return the result of a + b", () => {
    expect(cal.add(5, 5)).toBe(10);
  });

  test("a subtract operator that expects to return the result of a - b", () => {
    expect(cal.subtract(6, 2)).toBe(4);
  });

  test("a divide operator that expects to return the result of a / b and returns error if try to divide by 0", () => {
    expect(cal.divide(10, 2)).toBe(5);
  });

  test("a multiplier operator that expects to return the result of a * b", () => {
    expect(cal.multiply(5, 2)).toBe(10);
  });
});

describe('Caesar Cipher', () => {
    test('shifts letters correctly', () => {
      expect(caesarCipher('abc', 3)).toBe('def');
    });
  
    test('wraps from z to a', () => {
      expect(caesarCipher('xyz', 3)).toBe('abc');
    });
  
    test('preserves upper and lower case', () => {
      expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
    });
  
    test('does not modify non-alphabet characters', () => {
      expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
    });
  });


describe('analyzeArray function', () => {
    test('correctly analyzes an array of numbers', () => {
      const result = analyzeArray([1, 8, 3, 4, 2, 6]);
  
      expect(result.average).toBe(4);  
      expect(result.min).toBe(1);      
      expect(result.max).toBe(8);      
      expect(result.length).toBe(6);   
    });
  
  });