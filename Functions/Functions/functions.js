// I) Intro to functions
/**
 * A function that prints the welcome message for a new user 
 * @param {string} functionString : a string parameter that contains the name of the person (parameter example)
 * passed as an input through a user prompt
 */
function printWelcomeMessage(functionString) {
    console.log(`Hello! ${functionString}. Welcome to the first javascript function I have written in the functions lecture`);
}

// const INPUT_NAME = prompt("Enter your name:", "Sarthak Giri");
// printWelcomeMessage(INPUT_NAME); // argument

/**
 * A function to print multiple copies of the same message in separate lines using a for loop
 * @param {string} message : a string to be printed in console
 * @param {number} n : input number (integer or floating point)
 */
function functionWithMultipleInputs(message, n) {
    let i = 0;
    do {
        console.log(message);
        i++;
    } while (i < n);
}

// functionWithMultipleInputs("I love Jesus Christ our LORD and Savior", 51);

/**
 * A function to calculate the sum of two numbers (integer or floating point)
 * @param {number} a : the first number
 * @param {number} b : the second number
 */
function sumOfTwoNumbers(a, b) {
    console.log(`${a} + ${b} = ${a + b}`);
}

// sumOfTwoNumbers(123346788, 987661);
// sumOfTwoNumbers(91313, 86.2348);

/**
 * A function to calculate the sum of two numbers (integer or floating point) and return it
 * to the variable calling the function
 * @param {number} a : the first number
 * @param {number} b : the second number
 */
function getSumOfTwoNumbers(a, b) {
    return a + b; // function parameters a and b exist only within the function block (block scope)
}

// let total1 = getSumOfTwoNumbers(123346788, 987661);
// let total2 = getSumOfTwoNumbers(91.313, 86.2348);
// console.log(`${123346788} + ${987661} = ${total1}`);
// console.log(`${91.313} + ${86.2348} = ${total2}`);

//II) Arrow functions
/**
 * Arrow function stored in a variable to calculate sum of 2 numbers
 * @param {number} num1 
 * @param {number} num2 
 * @returns sum of num1 and num2
 */
const numberSum = (num1, num2) => num1 + num2; // return is not needed for single expression in arrow functions
// In a block body (using curly brackets), must use an explicit return statement.

console.log(`${234113} + ${75441} = ${numberSum(234113, 75441)}`)
