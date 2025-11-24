'use strict';

/**
 * @return {object}
 */
function makeCalculator() {
  const calculator = {
    result: 0,
    reset() {
      calculator.result = 0;

      return calculator;
    },
    add: (number = 0) => {
      calculator.result += number;
    },
    subtract: (number = 0) => {
      calculator.result -= number;
    },
    multiply: (number = 1) => {
      calculator.result *= number;
    },
    divide: (number = 1) => {
      calculator.result /= number;
    },
    operate(method, number) {
      method(number);

      return calculator;
    },
  };

  return calculator;
}

module.exports = makeCalculator;
