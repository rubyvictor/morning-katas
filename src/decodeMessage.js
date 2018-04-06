/* Write a function to decode a given input string.
Each letter is paired with the letter that it coincides with when the alphabet is reversed.
For example: "a" is encoded with "z", "b" with "y", "c" with "x", etc
Spaces are not encoded/decoded. For example: "gsrh nvhhztv" will be decoded as "this message"
*/
const alphabet = "abcdefghijklmnopqrstuvwxyz";

const decodeMessage = string => {
  const stringArr = string.split("");
  const resultArr = [];

  for (let i = 0; i < stringArr.length; i++) {
    if (stringArr[i] === " ") resultArr.push(stringArr[i]);
    if (alphabet.includes(stringArr[i].toLowerCase())) {
      const indexOfString = alphabet
        .split("")
        .indexOf(stringArr[i].toLowerCase());
      const result = alphabet.length - 1 - indexOfString;
      resultArr.push(alphabet[result]);
    }
  }

  return resultArr.join("");
};

module.exports = decodeMessage;
