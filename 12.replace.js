// replace() method replace a specified value with another value in a string
// but first match only replace
// case sensitive

const msg='bad is bad';
const newMsg=msg.replace('bad','good');
console.log(newMsg); // good is bad

// Project Use Case: Replace template variables like {{name}}.