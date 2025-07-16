// The replaceAll() method returns a new string with all matches
//  of a pattern replaced by a replacement. 
// case sensitive

const str='bad is bad';
const newStr=str.replaceAll('bad','good');
console.log(newStr); // good is good

// Project Use Case: Censor all inappropriate words in a comment.