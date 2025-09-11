// understanding console.log
/* console.log("Hello! Sarthak Giri");
console.log("Welcome to Javascript");
console.log("I hope you love javacript"); */

// understanding variables and variables naming rules and conventions
// fullName = "Jesus Christ"; Uncaught ReferenceError: Cannot access 'fullName' before initialization
// console.log(fullName);
// age = 119; Uncaught ReferenceError: Cannot access 'age' before initialization
// console.log(age);
price = 99.91;
// console.log(price);
// x = null; Uncaught ReferenceError: Cannot access 'x' before initialization
// console.log(x);
// y = undefined; Uncaught ReferenceError: Cannot access 'y' before initialization
// console.log(y);
radius = 8721;
isFollow = false;
// console.log(isFollow);
isFollow = true;
// console.log(isFollow);
// fullName = 32453; Uncaught ReferenceError: Cannot access 'fullName' before initialization
// console.log(fullName);
fullname = "Sarthak Giri";
FULLNAME = "Javscript Coding";
// console.log(fullname);
// console.log(FULLNAME);
// console.log(fullName);
Console = "Using reserved keywords";
// console.log(Console);

// understanding variable declaration scopes and value changeability
let fullName = "Thessalonians";
let age = 32;
let totalPrice = 3452144;
// console.log(fullName);
age = 59;
// console.log(age);
age = 86;
// console.log(age);
const PI = 3.142;
// PI = 6.284; Uncaught TypeError: Assignment to constant variable.
// console.log(PI);
let a; // undefined: no assignment during declaration will result in variable value being undefined
// console.log(a);
a = 10;
// console.log(a);
// const b; Uncaught SyntaxError: Missing initializer in const declaration
const b = 235435;
// console.log(b); 
// let and const are used for declaring block scope variables
{
    // console.log("using variable defined inside code block:");
    let varValue = 234443;
    // console.log(varValue);
}
// console.log("using variable defined inside a code block beyond that code block:");
// console.log(varValue); //Uncaught ReferenceError: varValue is not defined

// Data Types
// A) Primitive Data Types
// 1. number
// console.log(age);
// console.log(typeof age);
// console.log(totalPrice);
// console.log(typeof totalPrice);
// console.log(price);
// console.log(typeof price);
// 2. string
// console.log(fullName);
// console.log(typeof fullName);
// 3. boolean
// console.log(isFollow);
// console.log(typeof isFollow);
// 4. undefined
let x;
// console.log(x);
// console.log(typeof x);
// 5. null (absence of object)
let y = null;
// console.log(y);
// console.log(typeof y);
// 6. bigint
let bigIntValue = BigInt("325435643654765576668769121");
// let bigIntValue = 325435643654765576668769121;
/* Numeric literals with absolute values equal to 2^53 or 
greater are too large to be represented accurately as integers.ts(80008) */
// console.log(bigIntValue);
// console.log(typeof bigIntValue);
// 7. Symbol
let symbolValue = Symbol("Jesus Christ");
// console.log(symbolValue);
// console.log(typeof symbolValue);

// B) Non-primitive Data Types
// 1. Objects
const student = {
    firstName : "Sarthak",
    lastName : "Giri",
    joiningAge : 18,
    cgpa : 9.6,
    isPass : true
};
console.log(student);
console.log(typeof student);
console.log(student["joiningAge"]);
console.log(student.cgpa);

student.joiningAge = student.joiningAge + 1;
console.log(student.joiningAge);

student.lastName = "Mahato";
console.log(student);