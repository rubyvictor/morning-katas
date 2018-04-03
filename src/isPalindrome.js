/* Write a function `isPalindrome()` to determine whether an input string is a palindrome or not 

A palindrome is a word, phrase, number, or other sequence of characters which 
reads the same backward as forward, such as madam or racecar. 

`input` will be a single string without spaces and punctuation. */
const isPalindrome = input => {
  input = input.toLowerCase();
  const arr = input.split("");
  const result = arr.reverse().join("");

  return input === result ? true : false;
};

module.exports = isPalindrome;
