//         QAP 1 - Term 3
// Author: Noah Whiffen - SD12
// Dates:  January 17th, 2025 - ?

// Create a function to generate the password based on provided length.

const program = require('process'); 
const arguments = process.argv.slice(2); 

// All possible characters for passwords.
const alpha = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=;:?.,<>';
const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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

    return password;
}

generatePassword();



// accept flags through command line

// error handling for invalid input

