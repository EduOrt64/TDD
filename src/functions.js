function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

function reverseString(str) {
  const splitStr = str.split("");
  const reverseSplit = splitStr.reverse();

  return reverseSplit.join("");
}

class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  divide(a, b) {
    if (b === 0) {
      return "cannot divide by 0";
    }

    return a / b;
  }

  multiply(a, b) {
    return a * b;
  }
}

module.exports = {
  capitalize,
  reverseString,
  Calculator,
};
