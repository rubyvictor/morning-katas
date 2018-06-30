const fibonacciSequence = index => {
  if (index < 3) {
    return index - 1;
  }
  return fibonacciSequence(index - 1) + fibonacciSequence(index - 2);
};

module.exports = fibonacciSequence;
