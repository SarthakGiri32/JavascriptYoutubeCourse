/* Prompt user to enter his/her full name. Generate a username based on the input.
Start username with "@", followed by full name and ending with length of input string */
let fullName = prompt("Enter your full name:");
let username = fullName.toLowerCase();

if (username.includes(" ")) {
    username = username.slice(0, username.indexOf(" ")) + username.slice(username.indexOf(" ") + 1);
}
// console.log(username);

username = "@".concat(username, username.length);
console.log(`Username created from fullname "${fullName}": ${username}`);
