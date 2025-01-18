//         QAP 1 - Term 3
// Author: Noah Whiffen - SD12
// Dates:  January 17th, 2025 - ?

// Create a function to generate the password based on provided length.

const process = require('process');
const arguments = process.argv.slice(2);

function generatePassword(arguments) {
    console.log("Type --numbers to add numbers to your password.");
    console.log("Type --uppercase to add uppercase letters to your password.");\
    console.log("Type --symbols to add symbols to your password.");
    for (let i = 0; i < arguments.length; i++) {
        if (arguments[i] === '--numbers') {
            // generate numbers
        }
        if (arguments[i] === '--uppercase') {
            // generate uppercase
        }
        if (arguments[i] === '--symbols') {
            // generate symbols
        }
        else {
            console.log("Invalid Flag. Please see instructions above.");
        }
    }
}

// parse input from user and display generated password

// error handling for invalid input

// Allow user to include numbers, uppercase, or symbols using flags such as --numbers, --uppercase, == symbols

// Update function to include flags
