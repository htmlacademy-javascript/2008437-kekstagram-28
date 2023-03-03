const isCharLimitPassed = (string, maxChars) => string.length <= maxChars;

// Cтрока короче 20 символов
isCharLimitPassed('проверяемая строка', 20); // true
// Длина строки ровно 18 символов
isCharLimitPassed('проверяемая строка', 18); // true
// Строка длиннее 10 символов
isCharLimitPassed('проверяемая строка', 10); // false

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
isPalindrome('топот'); // true
// Несмотря на разный регистр, тоже палиндром
isPalindrome('ДовОд'); // true
// Это не палиндром
isPalindrome('Кекс'); // false
// Это палиндром
isPalindrome('Лёша на полке клопа нашёл '); // true

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

extractDigits('2023 год'); // 2023
extractDigits('ECMAScript 2022'); // 2022
extractDigits('1 кефир, 0.5 батона'); // 105
extractDigits('агент 007'); // 7
extractDigits('а я томат'); // NaN

const reachStringLength = (string, targetLength, adding) => {
  // targetLength = targetLength >> 0; //floor if number or convert non-number to 0;
  let stringAdding = '';
  if (string.length > targetLength) {
    return string;
  }
  targetLength = targetLength - string.length;
  if (targetLength > adding.length && targetLength % adding.length === 0) {
    adding += adding.repeat(targetLength / adding.length); //append to original to ensure we are longer than needed
  }
  if (targetLength > adding.length && targetLength % adding.length !== 0) {
    const stringAddingFraction = targetLength % adding.length;
    stringAdding = adding.repeat(Math.floor(targetLength / adding.length));
    for (let i = 0; i < stringAddingFraction; i += 1) {
      stringAdding = adding[i] + stringAdding;
    }
    return stringAdding + string;
  }
  return adding.slice(0,targetLength) + string;
};

// Добавочный символ использован один раз
reachStringLength('1', 2, '0'); // '01'

// Добавочный символ использован три раза
reachStringLength('1', 4, '0'); // '0001'

// Добавочные символы обрезаны с конца
reachStringLength('q', 4, 'werty'); // 'werq'

// Добавочные символы использованы полтора раза
reachStringLength('q', 4, 'we'); // 'wweq'

// Добавочные символы не использованы, исходная строка не изменена
reachStringLength('qwerty', 4, '0'); // 'qwerty'
