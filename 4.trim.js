// trim() –  Remove spaces from start and end of string
// trimStart() - Remove spaces from start of string
// trimEnd() - Remove spaces from end of string

let str = "   Hello World   ";

console.log(str.trim()); // "Hello World"
console.log(str.trimStart()); // "Hello World   "
console.log(str.trimEnd()); // "   Hello World"

// Project Use Case: Clean up user input in login/signup forms.