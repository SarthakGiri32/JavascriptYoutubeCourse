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
x = null;
// console.log(x);
y = undefined;
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
