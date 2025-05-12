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

function caesarCipher(str, shift) {
  return str.split('').map(char => {
    if (/[a-zA-Z]/.test(char)) {
      const base = char === char.toUpperCase() ? 65 : 97;
      const shiftedChar = String.fromCharCode(
        ((char.charCodeAt(0) - base + shift) % 26 + 26) % 26 + base
      );
      return shiftedChar;
    } else {
      return char;
    }
  }).join('');
}

function analyzeArray(arr) {
  return {
    average: arr.reduce((sum, num) => sum + num, 0) / arr.length,
    min: Math.min(...arr),
    max: Math.max(...arr),
    length: arr.length
  };
}

module.exports = {
  capitalize,
  reverseString,
  Calculator,
  caesarCipher,
  analyzeArray,
};
