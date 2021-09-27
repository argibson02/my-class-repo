// Change the values and operators below to test your algorithm meets all conditions
var x = 50;
var expression1 = (x < 25); //f
var expression2 = (x > 50); //f

// Write Your JavaScript Code Here
// we need statments with &&. There is noe flexibility with out given outcome statments.


if (expression1 === true && expression2 === true) {
console.log("True ✅ True ✅");
}


if (expression1 === true && expression2  !== true) {
console.log("True ✅ False ❌");
}

if (expression1 !== true && expression2  === true) {
console.log("False ❌ True ✅");
}

if (expression1 !== true && expression2  !== true) {
console.log("False ❌ False ❌");
}
