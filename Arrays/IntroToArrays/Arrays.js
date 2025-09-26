// Array in JS
// I) Intro to arrays
/* The Array object, as with arrays in other programming languages, 
enables storing a collection of multiple items under a single variable name, 
and has members for performing common array operations. */
let marks = [98, 12, 3, 50, 34, 67, 81, 42, 27, 75];
// console.log(marks);
// console.log(marks.length);

let bibleCharacters = ["Abraham", "Isaac", "Jacob", "Moses", "Aaron", "Joseph", "David", "Jesus Christ"];
// console.log(bibleCharacters);

// II) looping over arrays
console.log("Using for loop:");
for (let i = 0; i < marks.length; i++) {
    if (i === 0) console.log(`Marks of ${i + 1}st student = ${marks[i]}`);
    else if (i === 1) console.log(`Marks of ${i + 1}nd student = ${marks[i]}`);
    else if (i === 2) console.log(`Marks of ${i + 1}rd student = ${marks[i]}`);
    else console.log(`Marks of ${i + 1}th student = ${marks[i]}`);
}

let markIndex = 1;
console.log("\nUsing for of loop:");
for (let singleMark of marks) {
    if (markIndex === 1) console.log(`Marks of ${markIndex}st student = ${singleMark}`);
    else if (markIndex === 2) console.log(`Marks of ${markIndex}nd student = ${singleMark}`);
    else if (markIndex === 3) console.log(`Marks of ${markIndex}rd student = ${singleMark}`);
    else console.log(`Marks of ${markIndex}th student = ${singleMark}`);
    markIndex++;
}

console.log("\nUsing built in forEach loop:");
bibleCharacters.forEach((singleMark, i) => {
    switch (i) {
        case 0:
            console.log(`Marks of ${i + 1}st student = ${singleMark}`);
            break;
        case 1:
            console.log(`Marks of ${i + 1}nd student = ${singleMark}`);
            break;
        case 2:
            console.log(`Marks of ${i + 1}rd student = ${singleMark}`);
            break;
        default:
            console.log(`Marks of ${i + 1}th student = ${singleMark}`);
    }
});

// console.table() to display arrays or objects in tabular format
console.table(marks);
console.table(bibleCharacters);
