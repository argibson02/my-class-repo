// ======== You are given NOTHING to start with 😱 ========// array-rotation

var givenArray = [1, 2, 3, 4, 5, 6];
var n = 99;
var solvedArray = []

if (n > givenArray.length) {
    n = (n % givenArray.length);
}

if (n = givenArray.length) {
    var solvedArray = givenArray;
} else {
    var arrB = givenArray.slice((n - 1), (givenArray.length - 1));
    var arrA = givenArray.slice(0, (n - 1));
    var solvedArray = aarB.concat(arrA);
}

console.log(solvedArray);