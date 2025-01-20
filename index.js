//         QAP 1 - Term 3
// Author: Noah Whiffen - SD12
// Dates:  January 17th, 2025 - ?

const program = require('process'); 
const arguments = process.argv.slice(2); // Slice off node and script name.

// All possible characters for passwords.
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=;:?.,<>';
const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
const validOptions = ['length', 'numbers', 'uppercase', 'symbols'];

// Default values for flags.
let length = 8;
let includeNumbers = false;
let includeUpper = false;
let includeSymbols = false;

// Function for password generation.
function generatePassword(length, includeNumbers, includeUpper, includeSymbols) {
    let characters = alpha;

    if (includeNumbers) {
        characters += numbers;
    }

    if (includeUpper) {
        characters += upperAlpha;
    }

    if (includeSymbols) {
        characters += symbols;
    }

    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        password += characters[randomIndex];
    }
    // Need to add these features on a seperate branch!

    return password;
}

// Display help message.

// Parse CLI arguments and set flags.

arguments.forEach((arg, index) => {
    if (arg === '--length' && arguments[index + 1]) {
        length = parseInt(arguments[index + 1], 10);
    } 
    
    else if (arg === '--numbers') {
        includeNumbers = true;
    } 
    
    else if (arg === '--uppercase') {
        includeUpper = true;
    } 
    
    else if (arg === '--symbols') {
        includeSymbols = true;
    } 
    
    else {
        console.log(`Invalid flag or value: ${arg}`);
    }
});

// Error handling for invalid length value
if (isNaN(length) || length <= 0) {
    console.log("Please provide a valid length greater than 0 using -l <length>.");
    process.exit(1);
}

// Generate and display the password.
const password = generatePassword(length, includeNumbers, includeUpper, includeSymbols);
console.log("Generated Password:", password);

// accept flags through command line

// error handling for invalid input

