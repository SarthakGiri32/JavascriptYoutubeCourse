// I) Intro to strings
// String length property
// let strVar = "Welcome to Javascript strings!";
// let strVarLength = strVar.length;
// let strVarLength2 = strVar["length"]; // using square brackets to access string length property
// console.log("strVar :", strVar);
// console.log("strVar.length = " + strVarLength + ' or strVar["length"] = ' + strVarLength2);

// accessing individual characters
// console.log("strVar[9] : " + strVar[9]);
// let charPos = 22;
// console.log("strVar[" + charPos + "] : " + strVar[charPos]); // cannot use dot notation; prints "undefined"

// II) Template Literal
// const exampleObject = {
//     item: "Gel Pen",
//     price: 30
// };

// console.log(`The cost of a ${exampleObject.item} = ₹${exampleObject.price}`); // string interpolation

// Escape characters
// a) \n
// console.log("Welcome to using newline escape character\nto the second line");

// // b) \t
// console.log("This is a\ttab space");
// console.log("This is a\ttab space".length); // escape characters are counted as single characters

// III) String method examples
// in-built string functions to manipulate a string
// 1. toUpperCase()
// let strVar = "Sarthak Giri";
// console.log(`Converting "${strVar}" to upper case: ${strVar.toUpperCase()}`);

// 2. toLoweCase()
// let strVar = "VISCOUS LIQUID";
// console.log(`Converting "${strVar}" to lower case: ${strVar.toLowerCase()}`);

// 3. trim() removes the leading and trailing white space and line terminator characters from a string.
// let strVar = "                                              Using trim to shorten this string                                                                                   ";
// console.log(`Removing excess spaces from the start and end of the string\n"${strVar}":\n"${strVar.trim()}"`)

// 4. slice() returns a part of string between start and end indices
// let strVar = "The quick brown fox jumps over a lazy dog";
// console.log(`slicing a part of the string \n"${strVar}":\n1. "${strVar.slice(12, 37)}"`);
// console.log(`2. "${strVar.slice(8, 23)}"\n3. "${strVar.slice(3, 19)}"`);

// 5. concat()
// let strVar1 = "Sarthak", strVar2 = "Giri";
// const STRING_VARIABLE_3 = strVar1.concat(" ", strVar2);
// console.log(`The concatenation of "${strVar1}" and "${strVar2}" is: "${STRING_VARIABLE_3}"`);
// console.log(`The concatenation of "${strVar2}" and "${strVar1}" is: "${strVar2.concat(" ", strVar1)}"`);

// 6. replace()
// let strVarMain = "For God so loved the world that He gave his one and only son,\nthat whosoever believes in Him will never perish but have eternal life.";
// console.log(`Original string:\n${strVarMain}`);
// console.log(`Changed string:\n${strVarMain.replace("God", "Adonai")}`);
// console.log(`A different change in the original string:\n${strVarMain.replace("world", "Earth")}`);

// 7. replaceAll()
// let strVar = "Love your neighbour as yourself";
// console.log(`using "replaceAll()": "${strVar.replaceAll("o", "i")}"`)

// 8. charAt()
let strVar = "For God so loved the world that He gave his one and only son,\nthat whosoever believes in Him will never perish but have eternal life.";
console.log(`Using two methods of accessing individual characters:\n1. "strVar.charAt(120)": "${strVar.charAt(120)}"\n2. "strVar[120]": "${strVar[120]}"`);
