// I) push()
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
let wondersOfTheWorld = ["Taj Mahal", "Great Wall of China", "Christ the Redeemer", "Chichen Itza", "Petra", "Macchu Pichu", "Colosseum", "Calvary"];
let combinedWondersAndBibleCharacters = wondersOfTheWorld.concat(bibleCharacters, ["James", "Peter", "John", "Paul"]);
console.log("The combined arrays of wonders of the world and bible characters:");
console.table(combinedWondersAndBibleCharacters);
