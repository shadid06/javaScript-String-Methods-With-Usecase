// substring() method is similar to slice()
//  but it can't accept negative indexes, safe alternative to slice()

const str = "Apple, Banana, Kiwi, mango";
let res = str.substring(7, 13);
console.log(res); // Banana

//Project Use Case: Extract content from fixed indexes.