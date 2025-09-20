/* Create a game where you start with any random number. Ask the user to
Keep guessing the number until the user enters the correct number
*/
let randomNumber = 476, userInputNumber;

do {
    userInputNumber = prompt("Guess the random number:");
    if (+userInputNumber < randomNumber) {
        alert("Your guess is less than the random number. Please try again!");
    }
    else if (+userInputNumber > randomNumber) {
        alert("Your guess is greater than the random number. Please try again!");
    }
} while (+userInputNumber !== randomNumber);

alert("You guessed the random number!");
