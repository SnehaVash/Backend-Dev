const stringUtils = require('./string');

const myString = "Hello Node.js";

console.log("Original:", myString);
console.log("Capitalized:", stringUtils.capitalize(myString));
console.log("Reversed:", stringUtils.reverse(myString));
console.log("Vowel Count:", stringUtils.countVowels(myString));
