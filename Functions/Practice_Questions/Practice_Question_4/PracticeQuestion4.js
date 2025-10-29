/*
Take number n as input from user. Create an array of numbers from 1 to n.
Use reduce() to find the sum of all elements
Use reduct() to find the product of all elements
*/

const RANGE = parseInt(prompt("Enter a max integer value for the array:", 9));
let numArray = [];
for (let i = 1; i <= RANGE; i++) {
    numArray.push(i);
}
// console.log(JSON.stringify(numArray));

const TOTAL_SUM = numArray.reduce((totalSum, value) => totalSum + value);
const TOTAL_PRODUCT = numArray.reduce((totalProduct, value) => totalProduct * value);
console.log(`The total sum of all array elements: ${TOTAL_SUM}`);
console.log(`The total product of all array elements: ${TOTAL_PRODUCT}`);
