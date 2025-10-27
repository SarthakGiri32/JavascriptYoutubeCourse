// Create a function using the function keyword that counts and returns the number of vowels in a string

/**
 * A function that counts the number of vowels in a string
 * @param {string} stringParam a parameter of type string
 * @returns the count of vowels in the string
 */
function countVowelsInAString(stringParam) {
    let vCount = 0;
    stringParam = stringParam.toLowerCase();
    for (let chr of stringParam) {
        switch (chr) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vCount++;
        }
    }
    return vCount;
}

const inputString = "A reasonable umbrella";
console.log(`The number of vowels in the string "${inputString}": ${countVowelsInAString(inputString)}`);

// a arrow function version of the above question

/**
 * Arrow function to calculate the vowel count in a string
 * @param {string} stringParam a string parameter 
 * @returns the vowel count in the string parameter
 */
const vowelCountInAString = stringParam => {
    let vCount = 0;
    stringParam = stringParam.toLowerCase();
    for (let chr of stringParam) {
        switch (chr) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                vCount++;
        }
    }
    return vCount;
}

const arrowInputString = "Antique Artifacts like umbrellas and crockpots";
console.log(`The number of vowels in the string "${arrowInputString}": ${vowelCountInAString(arrowInputString)}`);
