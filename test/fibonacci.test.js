var fibonacciSequence = require("../src/fibonacci");

describe("test cases for fibonacci sequence", () => {
  test("first number should be 0", () => {
    expect(fibonacciSequence(1)).toEqual(0);
  });

  it('second number should be 1', () => {
      expect(fibonacciSequence(2)).toEqual(1)
  });

    it('third number should be 1', () => {
        expect(fibonacciSequence(3)).toEqual(1)
    });

    it("fourth number onwards should be sum of previous two numbers", () => {
      expect(fibonacciSequence(4)).toEqual(2);
    });
})
