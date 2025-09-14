let inputNumber = prompt("Enter a number:", 15);

if (+inputNumber % 5 === 0) {
    console.log(inputNumber, "is a multiple of 5");
} else {
    console.log(inputNumber, "is not a multiple of 5");
}