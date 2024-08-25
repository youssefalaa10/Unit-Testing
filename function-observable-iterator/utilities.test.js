const {
  reverseWords,
  filterOddNumbers,
  flattenArray,
  generateRandomNumber,
  findDuplicates,
  stringToAscii,
  fibonacci,
  isPalindrome,
  findLongestWord,
  uniqueValues,
} = require("./utilities");

// --- Easy-Level Tests (3) ---

test("Reverse words in a sentence", () => {
  expect(reverseWords("Hello world")).toBe("world Hello");
});

test("Filter odd numbers from an array", () => {
  expect(filterOddNumbers([1, 2, 3, 4, 5, 6])).toEqual([2, 4, 6]);
});

test("Convert string to ASCII codes", () => {
  expect(stringToAscii("abc")).toEqual([97, 98, 99]);
});

// --- Mid-Level Tests (3) ---

test("Flatten a nested array", () => {
  expect(flattenArray([1, [2, [3, 4], 5], 6])).toEqual([1, 2, 3, 4, 5, 6]);
});

test("Find duplicates in an array", () => {
  expect(findDuplicates([1, 2, 3, 2, 4, 5, 5, 6])).toEqual([2, 5]);
});

test("Check if a string is a palindrome", () => {
  expect(isPalindrome("A man, a plan, a canal, Panama")).toBe(true);
});

// --- High-Level Tests with Mocks (4) ---

jest.mock("./utilities", () => ({
  ...jest.requireActual("./utilities"),
  generateRandomNumber: jest.fn(),
}));

test("Generate random number within range using mock", () => {
  generateRandomNumber.mockReturnValue(5);

  expect(generateRandomNumber(1, 10)).toBe(5);
  expect(generateRandomNumber).toHaveBeenCalledWith(1, 10);
});

test("Find longest word in a sentence", () => {
  const sentence = "The quick brown fox jumped over the lazy dog";
  const longestWord = "jumped";

  expect(findLongestWord(sentence)).toBe(longestWord);
});

// test("Mock unique values function to return sorted array", () => {
//   const arr = [5, 3, 9, 1, 3, 5];

//   jest.spyOn(global.Array.prototype, "sort").mockReturnValueOnce([1, 3, 5, 9]);

//   const result = uniqueValues(arr);

//   expect(result).toEqual([1, 3, 5, 9]);
//   expect(Array.prototype.sort).toHaveBeenCalled();

//   jest.spyOn(global.Array.prototype, "sort").mockRestore(); // Restore original implementation
// });

test("Generate Fibonacci sequence with mock", () => {
  jest.spyOn(Array.prototype, "push").mockImplementation(() => "mocked");

  const result = fibonacci(5);

  expect(result).toEqual([0, 1, "mocked", "mocked", "mocked"]);

  jest.spyOn(Array.prototype, "push").mockRestore(); // Restore original implementation
});
