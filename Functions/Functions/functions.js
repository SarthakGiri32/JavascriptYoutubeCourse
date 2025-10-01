// I) Intro to functions
/**
 * A function that prints the welcome message for a new user
 * 
 * @param {string} functionString : a string parameter that contains the name of the person 
 * passed as an input through a user prompt
 */
function printWelcomeMessage(functionString) {
    console.log(`Hello! ${functionString}. Welcome to the first javascript function I have written in the functions lecture`);
}

const INPUT_NAME = prompt("Enter your name:", "Sarthak Giri");
printWelcomeMessage(INPUT_NAME);



