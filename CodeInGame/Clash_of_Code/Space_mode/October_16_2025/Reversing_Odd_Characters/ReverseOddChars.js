// failed in clash of code due to lack of time; trying it in offline execution
let initialString = "ABCDEFGH";

let j = initialString.length - 1, result = "";

for (let i = 0; i < initialString.length; i++) {
    if (i % 2 === 0) {
        result += initialString[i];
    }
    else {
        result += initialString[j];
        j -= 2;
    }
}

console.log(result); // not sure if all clash of code testcases will pass, since I do not have access to all testcases
