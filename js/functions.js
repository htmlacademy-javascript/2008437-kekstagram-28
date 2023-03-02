const isCharLimitPassed = (string, maxChars) => string.length <= maxChars;

// Cтрока короче 20 символов
console.log(isCharLimitPassed('проверяемая строка', 20)); // true
// Длина строки ровно 18 символов
console.log(isCharLimitPassed('проверяемая строка', 18)); // true
// Строка длиннее 10 символов
console.log(isCharLimitPassed('проверяемая строка', 10)); // false

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

// Строка является палиндромом
console.log(isPalindrome('топот')); // true
// Несмотря на разный регистр, тоже палиндром
console.log(isPalindrome('ДовОд')); // true
// Это не палиндром
console.log(isPalindrome('Кекс')); // false
// Это палиндром
console.log(isPalindrome('Лёша на полке клопа нашёл ')); // true

const extractDigits = (string) => {
  const normalizedString = String(string);
  let digits = '';
  for (const letter of normalizedString) {
    if (!isNaN(Number(letter)) && letter !== ' ') {
      digits += letter;
    }
  }
  return digits === '' ? NaN : Number(digits);
};

console.log(extractDigits('2023 год')); // 2023
console.log(extractDigits('ECMAScript 2022')); // 2022
console.log(extractDigits('1 кефир, 0.5 батона')); // 105
console.log(extractDigits('агент 007')); // 7
console.log(extractDigits('а я томат')); // NaN

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

// Добавочный символ использован один раз
console.log(reachStringLength('1', 2, '0')); // '01'

// Добавочный символ использован три раза
console.log(reachStringLength('1', 4, '0')); // '0001'

// Добавочные символы обрезаны с конца
console.log(reachStringLength('q', 4, 'werty')); // 'werq'

// Добавочные символы использованы полтора раза
console.log(reachStringLength('q', 4, 'we')); // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
console.log(reachStringLength('qwerty', 4, '0')); // 'qwerty'
