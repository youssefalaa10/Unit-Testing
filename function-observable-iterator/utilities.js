//  reverseWords - Reverses the words in a sentence
function reverseWords(sentence) {
  return sentence.split(" ").reverse().join(" ");
}
module.exports.reverseWords = reverseWords;

//  filterOddNumbers - Filters out odd numbers from an array
function filterOddNumbers(numbers) {
  return numbers.filter((num) => num % 2 === 0);
}
module.exports.filterOddNumbers = filterOddNumbers;

// flattenArray - Flattens a nested array
function flattenArray(arr) {
  return arr.reduce((flat, toFlatten) => flat.concat(Array.isArray(toFlatten) ? flattenArray(toFlatten) : toFlatten), []);
}
module.exports.flattenArray = flattenArray;

// generateRandomNumber - Generates a random number between min and max
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
module.exports.generateRandomNumber = generateRandomNumber;

// findDuplicates - Finds duplicate elements in an array
function findDuplicates(arr) {
  const duplicates = [];
  const seen = new Set();
  for (let num of arr) {
    if (seen.has(num) && !duplicates.includes(num)) {
      duplicates.push(num);
    }
    seen.add(num);
  }
  return duplicates;
}
module.exports.findDuplicates = findDuplicates;

// Function 6: stringToAscii - Converts a string to its ASCII code array
function stringToAscii(str) {
  return str.split("").map((char) => char.charCodeAt(0));
}
module.exports.stringToAscii = stringToAscii;

// Function 7: fibonacci - Generates the Fibonacci sequence up to n elements
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}
module.exports.fibonacci = fibonacci;

// Function 8: isPalindrome - Checks if a string is a palindrome
function isPalindrome(str) {
  const cleaned = str.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
  return cleaned === cleaned.split("").reverse().join("");
}
module.exports.isPalindrome = isPalindrome;

// Function 9: findLongestWord - Finds the longest word in a sentence
function findLongestWord(sentence) {
  return sentence.split(" ").reduce((longest, word) => word.length > longest.length ? word : longest, "");
}
module.exports.findLongestWord = findLongestWord;

// Function 10: uniqueValues - Returns unique values from an array
function uniqueValues(arr) {
  return [...new Set(arr)];
}
module.exports.uniqueValues = uniqueValues;
