// Method 1: toFixed()

// Explanation (short):
// Rounds a number to a fixed number of decimal places and returns it as a string.
let price = 12.3456;
console.log(price.toFixed(2)); // "12.35"
// Method 2: toString()

// Explanation (short):
// Converts a number into a string.
let num = 100;
console.log(num.toString()); // "100"
// Method 3: parseInt()

// Explanation (short):
// Converts a string into a whole number (integer)
let num = "45px";
console.log(parseInt(num)); // 45
// Method 4: parseFloat()

// Explanation (short):
// Converts a string into a floating-point number
let num = "3.14abc";
console.log(parseFloat(num)); // 3.14
// Method 5: isNaN()

// Explanation (short):
// Checks if a value is NOT a number.
let value = "hello";
console.log(isNaN(value)); // true
let num = 5;
console.log(isNaN(num)); // false
// Method 6: Number()

// Explanation (short):
// Converts a value into a number.
let value = "50";
console.log(Number(value)); // 50
// Method 7: Math.round()

// Explanation (short):
// Rounds a number to the nearest whole number
console.log(Math.round(4.6)); // 5
// Method 8: Math.floor()

// Explanation (short):
// Always rounds down to the nearest whole number
console.log(Math.floor(4.9)); // 4
// Method 9: Math.ceil()

// Explanation (short):
// Always rounds up to the nearest whole number.
console.log(Math.ceil(4.1)); // 5
// Method 10: Math.random()

// Explanation (short):
// Generates a random number between 0 and 1.
console.log(Math.random()); // e.g., 0.123456789