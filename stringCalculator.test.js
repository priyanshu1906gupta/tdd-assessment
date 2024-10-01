// stringCalculator.test.js
const add = require('./stringCalculator');

test('should return 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('should return 1 for "1"', () => {
  expect(add("1")).toBe(1);
});

// test('should return 6 for "1,2,3"', () => {
//   expect(add("1,2,3")).toBe(6);
// });

// test('should handle new lines as delimiters', () => {
//   expect(add("1\n2,3")).toBe(6);
// });

// test('should support custom delimiters', () => {
//   expect(add("//;\n1;2")).toBe(3);
// });

// test('should throw an exception for negative numbers', () => {
//   expect(() => add("1,-2,3")).toThrow("Negative numbers not allowed: -2");
// });

// test('should throw an exception for multiple negative numbers', () => {
//   expect(() => add("1,-2,-3")).toThrow("Negative numbers not allowed: -2, -3");
// });
