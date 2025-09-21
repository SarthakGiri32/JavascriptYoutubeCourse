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
const exampleObject = {
    item: "Gel Pen",
    price: 30
};

console.log(`The cost of a ${exampleObject.item} = ₹${exampleObject.price}`); // string interpolation
