/* Shortens a list by: failed in clash of code due to end of time limit
1) Adding 1st and last element and storing the result in the location of first element, then deleting the last element, and so on
2) if the length is odd, keep the middle element unmodified and carry over to the shortened list
For eg:
1) 1 2 3 4 5 (adding 1+5 and 2+4)
2) 6 6 3 (1+5 2+4 3)
3) 9 6 (6+3 6)
4) 15 (9+6) */
const inputList = [33, 59, 64, 77, 91, 10, 7, 9, 11, 29, 34, 88, 73, 45, 23, 4, 51, 34, 17]; let inputListLength = inputList.length;
console.warn(`inputList: ${inputList}`);
console.warn(`inputListLength: ${inputListLength}`);
let resultList = inputList.slice(), result = "";
while(inputListLength > 1) {
    for (let i = 0; i < Math.floor(inputListLength / 2); i++) {
        console.warn(`resultList[${i}]: ${resultList[i]}; resultList[${inputListLength - 1 - i}]: ${resultList[inputListLength - 1 - i]}`);
        resultList[i] = resultList[i] + resultList[inputListLength - 1 - i];           
        result += resultList[i] + " ";
        resultList.pop();
    }
    if (inputListLength % 2 !== 0) {      
        result += resultList[Math.floor(inputListLength / 2)];
    }
    inputListLength = resultList.length;
    console.warn(`inputListLength: ${inputListLength}`);
    console.log(result);
    result = "";
}
