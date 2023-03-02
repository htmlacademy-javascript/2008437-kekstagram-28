const isCharLimit = (string, maxChars) => string.length <= maxChars;

const isPalindrome = (string) => {
  let stringNormalized = '';
  let stringReversed = '';
  for (const letter of string) {
    if (letter !== ' ') {
      stringNormalized = letter.toLowerCase() + stringNormalized;
      stringReversed = stringReversed + letter.toLowerCase();
    }
  }
  return stringNormalized === stringReversed;
};

const extractDigits = (string) => {
  const normalizedString = String(string);
  let digits = '';
  for (const letter of normalizedString) {
    if (!isNaN(Number(letter)) && letter !== ' ') {
      digits += letter;
    }
  }
  return Number(digits);
};

console.log(extractDigits('2023 год 213423423423'));
