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
let i = 1, n = 300;
while (i <= n) {
    console.log("Welcome to while loop");
    i++;
}
