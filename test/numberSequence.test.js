const numberSequence = require("../src/numberSequence");

describe("Tests for numbers in sequence", () => {
  it("first number should be zero", () => {
    expect(numberSequence(1)).toEqual(0);
  });

  it("second number should be one", () => {
    expect(numberSequence(2)).toEqual(1);
  });

  it("third number should be one", () => {
    expect(numberSequence(3)).toEqual(1);
  });

  it("fourth number should be two", () => {
    expect(numberSequence(4)).toEqual(2);
  });

  it("fifth number should be three", () => {
    expect(numberSequence(5)).toEqual(3);
  });
});

//first number in sequence is 0
