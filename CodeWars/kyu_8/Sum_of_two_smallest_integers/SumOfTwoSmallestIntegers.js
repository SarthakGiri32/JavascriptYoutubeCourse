let inputArray = [23565476, 678688999, 672342, 98567, 35654, 2354354555578, 456567, 766456421];
if (inputArray.length >= 4) {
    let min = 0, temp = 0;
    for (let i = 0; i < inputArray.length - 1; i++) { // selection sort;
        min = i;
        for (let j = i + 1; j < inputArray.length; j++) {
            if (inputArray[min] > inputArray[j]) {
                min = j;
            }
        }
        temp = inputArray[i];
        inputArray[i] = inputArray[min];
        inputArray[min] = temp;
    }
    console.log(JSON.stringify(inputArray));
    console.log(`Sum of two smallest integers: ${inputArray[0] + inputArray[1]}`);
}
else {
    console.error(`Failed for input length: ${inputArray.length}`);
}