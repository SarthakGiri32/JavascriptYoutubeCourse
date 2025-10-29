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
 * @param {number} num1 : the first number
 * @param {number} num2 : the second number
 * @returns sum of num1 and num2
 */
const numberSum = (num1, num2) => num1 + num2; // return is not needed for single expression in arrow functions
// In a block body (using curly brackets), must use an explicit return statement.

// console.log(`${234113} + ${75441} = ${numberSum(234113, 75441)}`);

/**
 * Arrow function for calculating the product of two numbers
 * @param {number} x 
 * @param {number} y 
 * @returns the product of x and y
 */
const productOfTwoNums = (x, y) => x * y;

// console.log(`${65} * ${75} = ${productOfTwoNums(65, 75)}`);

//III) Array methods
//a) forEach() method in Arrays (a method is a function associated with an object or another data structure)
// let arrayEg = [123, 454, 88234, 9];
// const printArrayElems = (element, index) => console.log(`a[${index}] : ${element}`);

// ['SarthakG', 'Bokka', 'Central Knot City'].forEach(printArrayElems);
// arrayEg.forEach(printArrayElems);

/* In Javascript, functions can be assigned to variables in the same way that strings or arrays can. 
They can be passed into other functions as parameters or returned from them as well.
A “higher-order function” is a function that accepts functions as parameters and/or returns a function. */

//b) map() method
/*The map() method of Array instances creates a new array 
populated with the results of calling a provided function on every element in the calling array.*/
// let newModifiedArray = arrayEg.map(val => val / 81);
// console.log(`arrayEg: ${JSON.stringify(arrayEg)}`);
// console.log(`newModifiedArray: ${JSON.stringify(newModifiedArray)}`);

// arrayEg.map(val => console.log(val)); prints the values, but if stored in a new array, its populated with null

// const kvArray = [
//   { key: 1, value: 10 },
//   { key: 2, value: 20 },
//   { key: 3, value: 30 },
// ];

// const kvModifiedArray = kvArray.map(({ key, value }) => ({ [key]: value }));
// console.log(kvModifiedArray);

//c) filter() method
/*The filter() method of Array instances creates a shallow copy of a portion of a given array, 
filtered down to just the elements from the given array that pass the test implemented by the provided function.*/
// const namesList = ['Alpha', 'Beta', 'Gamma', 'Delta', 'Omega', 'First', 'Last'];
// const arrayOfFilteredNames = namesList.filter(val => val.length > 4);
// console.log(`namesList: ${JSON.stringify(namesList)}`);
// console.log(`arrayOfFilteredNames: ${JSON.stringify(arrayOfFilteredNames)}`);

// const numberArr = [23423, 81, 99, 35, 36, 96, 48, 75, 88236, 77871, 255];
// const filteredForThree = numberArr.filter(element => element % 3 === 0);
// console.log(`numberArr: ${JSON.stringify(numberArr)}`);
// console.log(`filteredForThree: ${JSON.stringify(filteredForThree)}`);

//d) reduce() method
/*
The reduce() method of Array instances executes a user-supplied "reducer" callback function on each element of the array, 
in order, passing in the return value from the calculation on the preceding element. The final result of running the reducer 
across all elements of the array is a single value.

The first time that the callback is run there is no "return value of the previous calculation". 
If supplied, an initial value may be used in its place. Otherwise the array element at index 0 is used as the initial value 
and iteration starts from the next element (index 1 instead of index 0).
*/

const numberArr = [81, 99, 35, 36, 96, 48, 75, 1, 3, 5, 9, 10, 22, 28, 27, 42, 45, 53, 68];
let total = numberArr.filter(element => element % 3 === 0).reduce((totalOfMultiplesOfThree, val) => totalOfMultiplesOfThree + val);
console.log(`Total after filtering for multiples of 3 and adding the multiples: ${total}`);
