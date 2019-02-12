const keyboard = require('./topics/wish/keyboard.js');
const palindrome = require('./topics/wish/palindrome.js');

// keypad
// let array = [['1', '2', '3'], ['4', '5', '6'], ['7', '8', '9']];
// let result = keyboard('5555', array); // expect 0;
// console.log(result);
// result = keyboard('123456789', array); // expect 9
// console.log(result);

// array = [['4', '1', '6'], ['2', '5', '7'], ['9', '3', '8']];
// result = keyboard('5555', array); // 5555
// console.log(result);


// palindrome

let string = 'abc';
const result = palindrome(string);
console.log(result);
