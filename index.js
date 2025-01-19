//         QAP 1 - Term 3
// Author: Noah Whiffen - SD12
// Dates:  January 17th, 2025 - ?

// Create a function to generate the password based on provided length.

const program = require('process'); 
const arguments = process.argv.slice(2); 

const alpha = 'abcdefghijklmnopqrstuvwxyz';
const numbers = '0123456789';
const symbols = '!@#$%^&*()_-+=;:?.,<>';
const upperAlpha = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';

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



// parse input from user and display generated password

// error handling for invalid input

// Allow user to include numbers, uppercase, or symbols using flags such as --numbers, --uppercase, == symbols

// Update function to include flags
