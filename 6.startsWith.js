// startsWith() method checks whether a string begins with specified characters.
// startsWith() method returns true if a string begins with specified characters.
// startsWith() method returns false if a string does not begin with specified characters.
// startsWith() method is case sensitive.

// syntax: string.startsWith(searchvalue, start)

// searchvalue: Required. The characters to search for.
// start: Optional. Default 0. The position to begin searching for.

// example 1:
let text = "Hello world, welcome to the universe.";
let result = text.startsWith("Hello");
console.log(result); // true

// example 2:
let text1 = "Hello world, welcome to the universe.";
let result1 = text1.startsWith("world");
console.log(result1); // false

// example 3:
let text2 = "Hello world, welcome to the universe.";
let result2 = text2.startsWith("world", 6); // 6 is the position to begin searching for.
console.log(result2); // true

// Project Use Case: Validate Bangladeshi phone number format.