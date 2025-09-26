// for a given array of student marks, find the average marks
const MARKS = [85, 97, 44, 37, 76, 60];
let classTotal = 0;

// using forEach loop
MARKS.forEach((singleMark) => {
    classTotal += singleMark; 
});

console.log(`Average marks of the entire class = ${classTotal / MARKS.length}`);
