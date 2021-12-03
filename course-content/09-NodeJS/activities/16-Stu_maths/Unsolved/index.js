// TODO: Import `maths.js`
const maths = require("./maths.js");
// TODO: Capture the values passed from the command line into these three variables: `operation`, `numOne` and `numTwo`
console.log(parseInt(module.exports[0]));
console.log(parseInt(module.exports[1]));
console.log(parseInt(module.exports[2]));
console.log(parseInt(module.exports[3]));

var operation = process.argv[2] 


var numOne = parseInt(process.argv[3]);
var numTwo = parseInt(process.argv[4]);





// TODO: Create a `switch` statement that accepts an `operation` parameter
// and each `case` uses the corresponding `maths` method
// to perform each math operation on the two numbers, `numOne` and `numTwo`
switch (operation) {
case "sum":
    console.log(maths.sum(numOne, numTwo));
    break;
case "difference":
    console.log(maths.difference(numOne, numTwo));
    break;
case "product":
    console.log(maths.product(numOne, numTwo));
    break;
case "quotient":
    console.log(maths.quotient(numOne, numTwo));
    break;   
}