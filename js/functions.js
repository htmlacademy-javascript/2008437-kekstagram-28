const isCharLimitPassed = (string, maxChars) => string.length <= maxChars;

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

const reachStringLength = (string, length, add) => {
  let stringEnhanced = string;
  if (string.length < length) {
    while (stringEnhanced.length < length) {
      stringEnhanced = add + stringEnhanced;
    }
    while (stringEnhanced.length > length) {
      stringEnhanced = stringEnhanced.substring(1);
    }
  }
  return stringEnhanced;
};

