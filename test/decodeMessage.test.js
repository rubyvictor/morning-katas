const decodeMessage = require('../src/decodeMessage');

test("decodeMessage('a') will return z", () => {
    expect(decodeMessage("y")).toEqual("b");
});

test("decodeMessage('abc') will return zyx", () => {
  expect(decodeMessage("abc")).toEqual("zyx");
});


test("decodeMessage('a b c') will return z y x", () => {
  expect(decodeMessage("a bc")).toEqual("z yx");
});

test("decodeMessage('r slkv mlylwb wvxlwvh gsrh nvhhztv') will return i hope nobody decodes this message", () => {
  expect(decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv")).toEqual("i hope nobody decodes this message");
});

test("decodeMessage('r sLKv) will return i hope", () => {
  expect(decodeMessage("r sLKv")).toEqual(
    "i hope"
  );
});
// Test cases: actual --> expected
// decodeMessage("a") --> "z"
// decodeMessage("z") --> "a"
// decodeMessage("b") --> "y"
// decodeMessage("y") --> "b"
// decodeMessage("ab") --> "zy"
// decodeMessage("sr") --> "hi"
// decodeMessage("svool") --> "hello"

// decodeMessage("gsrh nvhhztv") --> "this message"
// decodeMessage("r slkv mlylwb wvxlwvh gsrh nvhhztv") --> "i hope nobody decodes this message"