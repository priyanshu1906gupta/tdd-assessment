// stringCalculator.js

function add(numbers) {
    if (numbers === "") return 0;
  
    const delimiters = [',', '\n'];
    let customDelimiterMatch = numbers.match(/^\/\/(.+)\n/);
  
    if (customDelimiterMatch) {
      delimiters.push(customDelimiterMatch[1]);
      numbers = numbers.split('\n').slice(1).join('\n'); // Remove delimiter definition
    }
  
    let regex = new RegExp(`[${delimiters.join('')}]`);
    let numArray = numbers.split(regex).map(Number);
  
    let negatives = numArray.filter(num => num < 0);
    if (negatives.length > 0) {
      throw new Error(`Negative numbers not allowed: ${negatives.join(', ')}`);
    }
  
    return numArray.reduce((sum, num) => sum + num, 0);
  }
  
  module.exports = add;
  