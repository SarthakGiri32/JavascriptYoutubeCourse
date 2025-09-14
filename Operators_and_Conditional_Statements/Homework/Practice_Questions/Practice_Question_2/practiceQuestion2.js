const studentScore = prompt("Enter your score (0 to 100):", "82.67");
let grade;

if (studentScore >= 90 && studentScore <= 100) {
    grade = "A";
}
else if (studentScore >= 70 && studentScore <= 89) {
    grade = "B";
}
else if (studentScore >= 60 && studentScore <= 69) {
    grade = "C";
}
else if (studentScore >= 50 && studentScore <= 59) {
    grade = "D";
}
else if (studentScore >= 0 && studentScore <= 49) {
    grade = "F";
}

console.log("According to your score, your grade is", grade);
