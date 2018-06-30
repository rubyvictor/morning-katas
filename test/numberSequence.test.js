const numberSequence = require("../src/numberSequence");

describe("Tests for numbers in sequence", () => {
  it("first number should be zero", () => {
    expect(numberSequence(1)).toEqual(0);
  });

  it("second number should be one", () => {
    expect(numberSequence(2)).toEqual(1);
  });

  it("third number onwards should be the sum of previous two numbers", () => {
    expect(numberSequence(3)).toEqual(1);
    expect(numberSequence(4)).toEqual(2);
    expect(numberSequence(5)).toEqual(3);
  });

  it.only("throws an error when index is 0", () => {
    expect(() => {
      numberSequence(0);
    }).toThrow("random error");
  });
});
