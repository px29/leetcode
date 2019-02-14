// const keyboard = require('./topics/wish/keyboard.js');
// const palindrome = require('./topics/wish/palindrome.js');
// const subsequence = require('./topics/wish/subsequence.js');
const maximumAmount = require('./topics/wish/text1.js');

const result = maximumAmount([2, 5], 4);
console.log(result);

// // keypad
// console.error('Keypad:');
// let array = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
// let result = keyboard('5555', array); // expect 0;
// console.log(result);
// result = keyboard('123456789', array); // expect 10
// console.log(result);

// array = [['4', '1', '6'], ['2', '5', '7'], ['9', '3', '8']];
// result = keyboard('5555', array); // 5555
// console.log(result);


// // palindrome
// console.error('Palindrome:');

// let string = 'aba';
// result = palindrome(string);
// console.log(result);

// // subsequence
// console.error('Subsequence:');
// result = subsequence('cba');
// console.log(result);
// result = subsequence('');
// console.log(result);
// result = subsequence(' a b ');
// console.log(result);
