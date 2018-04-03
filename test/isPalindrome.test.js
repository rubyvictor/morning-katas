var isPalindrome = require("../src/isPalindrome");

it("should return true", () => {
  expect(isPalindrome("")).toEqual(true);
});

it("should return true given a string of length x", () => {
  expect(isPalindrome("abba")).toEqual(true);
});

it('should return true given a palindrome ignoring case', () => {
    expect(isPalindrome("aBba")).toEqual(true);
});

it("should return true given a palindrome ignoring case", () => {
  expect(isPalindrome("malayalam")).toEqual(true);
});

// Test cases: actual --> expected
// isPalindrome('') --> true
// isPalindrome('a') --> true
// isPalindrome('ab') --> false
// isPalindrome('abc') --> false
// isPalindrome('abba') --> true
// isPalindrome('tacocat') --> true
// isPalindrome('racecar') --> true
// isPalindrome('umbrella') --> false
