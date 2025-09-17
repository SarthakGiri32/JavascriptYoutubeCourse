// I) Loops in JS
// 1. For loop
// print a console.log statement 5 times
// for (let i = 1; i <= 500000; i++) {
//     console.log("Lets start with for loops!");
// }
// console.log("Loop execution is complete");

// calculate sum of n natural numbers
// let totalSum = 0, n = 50;
// for (let naturalNumber = 1; naturalNumber <= n; naturalNumber++) {
//     totalSum += naturalNumber;
// }
// console.log("Sum of " + n + " natural numbers = " + totalSum);

/* using var to define for loop iterator variable for global scoping, 
to use the loop iteration variable outside the for loop*/
// for (let i = 1; i <= 20; i++) {
//     console.log("i = " + i);
// }

// console.log(i); Uncaught ReferenceError: i is not defined

// for (var i = 1; i <= 37; i++) {
//     console.log("i = " + i);
// }

// console.log("Value of i after loop completion = " + i);

// or, declare i with let outside for loop to avoid using var (old standard)
// let i;
// for (i = 1; i <= 20; i++) {
//     console.log("i = " + i);
// }
// console.log("Value of i after loop completion = " + i);

// 2. While loop
// Print integers from 1 to n
// let i = 1, n = 20;
// while (i <= n) {
//     console.log("i = " + i);
//     i++;
// }

// Print a console log statement n times
// let i = 1, n = 300;
// while (i <= n) {
//     console.log("Welcome to while loop");
//     i++;
// }

// if the condition is false, the while loop will not run (unlike do-while)
// let i = 1000, n = 300;
// while (i <= n) {
//     console.log("Welcome to while loop");
//     i++;
// }

// 3. Do-while loop
// Print a console log statement n times
// the loop code block will be executed atleast once, even if the condition is false
// let i = 1000, n = 300;
// do {
//     console.log("Welcome to while loop");
//     i++;
// } while (i <= n);

// Print integers 1 to n
// let i = 1, n = 20;
// do {
//     console.log("i = " + i);
//     i++;
// } while (i <= n);

// 4. for-of loop
// used for looping over a sequence of elements present in an iterable object (strings, arrays, etc)
// let strIterable = "Welcome to for-of iteration";
/* for-of internally handles loop iteration variable initialization, checking stopping condition, 
   and updating the loop iteration variable */
// for (let strChar of strIterable) {
//     console.log("strChar =", strChar);
// }

// can also be used to calculate length of strings (without using javascript built-in functions)
// let strLength = 0;
// for (let strChar of strIterable) {
//     console.log("strChar =", strChar);
//     strLength++;
// }
// console.log("Length of the string is " + strLength);

// 5. for-in loop
/* The for...in statement iterates over all enumerable string properties of an object 
(ignoring properties keyed by symbols), including inherited enumerable properties. */
const student = {
    name: "Sarthak Giri",
    age: 17,
    cgpa: 9.8,
    isPass: true
}

for (let studentKey in student) {
    console.log("student." + studentKey + " : " + student[studentKey]);
}
