// filter out marks of students who scored <= 90 in the array
const STUDENT_MARKS = [100, 87, 91, 90, 65, 23, 89, 92, 45, 94, 11, 33, 90, 79, 99, 95, 97, 4];
const FILTERED_MARKS_ARRAY = STUDENT_MARKS.filter(element => element > 90);
console.log(`Marks of students: ${JSON.stringify(STUDENT_MARKS)}`);
console.log(`Keeping student marks > 90: ${JSON.stringify(FILTERED_MARKS_ARRAY)}`);
