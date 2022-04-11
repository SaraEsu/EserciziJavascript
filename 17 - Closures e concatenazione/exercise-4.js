function calculate() {
  let result = 0;
  return {
    add(num) {
      result += num;
      return this;
    },
    multiply(num) {
      result *= num;
      return this;
    },
    sub(num) {
      result -= num;
      return this;
    },

    divide(num) {
      result /= num;
      return this;
    },

    printResult() {
      console.log(result);
    }
  }
}


const calculator = calculate();
calculator.add(2).add(4).multiply(3).sub(1).sub(3).divide(2).printResult(); // Il risultato sarà: 7