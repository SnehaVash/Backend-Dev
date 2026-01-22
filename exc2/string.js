function capitalize(str) {
  return str.toUpperCase();
}

function reverse(str) {
  const letters = str.split('');
  const reversedLetters = letters.reverse();
  const reversedStr = reversedLetters.join('');
  return reversedStr;
}

function countVowels(str) {

  const matches = str.match(/[aeiouAEIOU]/g);

  if (matches) {
    return matches.length;
  } else {
    return 0;
  }
}

module.exports = {
  capitalize: capitalize,
  reverse: reverse,
  countVowels: countVowels
};
