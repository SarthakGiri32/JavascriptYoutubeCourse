// // I) push()
let bibleCharacters = ["Abraham", "Isaac", "Jacob", "Moses", "Aaron", "Joseph", "David", "Jesus Christ"];
let newBibleCharactersLength = bibleCharacters.push("Mary", "Matthew", "Mark", "Luke", "John");
// console.log(`The changed array with new length of ${newBibleCharactersLength}:`);
// console.table(bibleCharacters);

// II) pop()
// let removedFromEndBibleCharacter = bibleCharacters.pop();
// console.log(`\nDisplaying the name of the bible character removed from the end of the array: ${removedFromEndBibleCharacter}`);
// console.log(`\nThe changed array with new length of ${bibleCharacters.length}:`);
// console.table(bibleCharacters);

// III) toString()
// let marks = [34, 51, 1, 100, 72];
// console.log(`String representation of marks array: ${marks.toString()}`);
// console.log(`String representation of marks array with Javascript calling\ntoString() automatically without a explicit call: ${marks}`);
// implicitly called since array is represented as a text value

// IV) concat()
// let wondersOfTheWorld = ["Taj Mahal", "Great Wall of China", "Christ the Redeemer", "Chichen Itza", "Petra", "Macchu Pichu", "Colosseum", "Calvary"];
// let combinedWondersAndBibleCharacters = wondersOfTheWorld.concat(bibleCharacters, ["James", "Peter", "John", "Paul"]);
// console.log("The combined arrays of wonders of the world and bible characters:");
// console.table(combinedWondersAndBibleCharacters);

// V) unshift()
// mdn docs example
// const arr = [1, 2];

// arr.unshift(0); // result of the call is 3, which is the new array length
// // arr is [0, 1, 2]
// console.log("First unshift call:");
// console.log(arr);

// arr.unshift(-2, -1); // the new array length is 5
// // arr is [-2, -1, 0, 1, 2]
// console.log("Second unshift call:");
// console.log(arr);

// arr.unshift([-4, -3]); // the new array length is 6
// // arr is [[-4, -3], -2, -1, 0, 1, 2]
// console.log("Third unshift call:");
// console.log(arr);

// arr.unshift([-7, -6], [-5]); // the new array length is 8
// // arr is [ [-7, -6], [-5], [-4, -3], -2, -1, 0, 1, 2 ]
// console.log("Fourth unshift call:");
// console.log(arr);

// let unshiftBibleCharsLength = bibleCharacters.unshift("Adam", "Eve", "Enoch", "Noah");
// console.log("The unshifted bible characters array:");
// console.table(bibleCharacters);

// VI) shift()
// let removedBibleCharacterFromStart, removedBibleCharCount = 0;
// do {
//     removedBibleCharCount++;
//     removedBibleCharacterFromStart = bibleCharacters.shift();
//     console.log(`Removed bible character ${removedBibleCharCount}: ${removedBibleCharacterFromStart}`);
// } while (removedBibleCharacterFromStart !== "Noah");

// console.log("\nThe shifted bible characters array:");
// console.table(bibleCharacters);

// VII) slice()
// let slicedBibleChars = bibleCharacters.slice(3, -4);
// console.log("A slice of the bible characters array:");
// console.table(slicedBibleChars);
// slicedBibleChars = bibleCharacters.slice(-9, -2);
// console.log("\nAnother slice of the bible characters array:");
// console.table(slicedBibleChars);

// VIII) splice()
let bibleCharactersCopy = bibleCharacters.slice();
let deletedElementsArray = bibleCharactersCopy.splice(4, 2);
console.log("The deleted array elements");
console.log(deletedElementsArray);
console.log("\nThe modified array copy");
console.table(bibleCharactersCopy);
console.log("\nThe original un-modified array");
console.table(bibleCharacters);

bibleCharactersCopy = bibleCharacters.slice();
deletedElementsArray = bibleCharactersCopy.splice(7, 5, "Elijah", "Isaiah", "Micah", "Job");
console.log("\n\nDifferent deleted array elements");
console.log(deletedElementsArray);
console.log("\Different modified array copy");
console.table(bibleCharactersCopy);
console.log("\nThe original un-modified array");
console.table(bibleCharacters);
