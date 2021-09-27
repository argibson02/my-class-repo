//ARRAYS ///////////////////////////        

//var computer = [r, p, s];


////would you liek to play
/*let player = confirm("Would you like to play rock , paper,  scissors?");

if (player = true) {
alert("ok!");
}
else  {
alert(":(");
}
*/



/////choice section
const getComputer= () => {
    const getNumber = (Math.floor(Math.random() * 3));
    if (getNumber === 0){
        return "rock";
    }
    else if (getNumber === 1){
        return "paper";
    }
    else if (getNumber === 2){
        return "scissors";
    }
}
console.log(getComputer());   
   
   /// console.log(getNumber(3));



/*
    var map = {
        0: r,
        1: s,
        2: p,
    }
}
console.log(getNumber());
*/



/*
console.log(getNumber(3));
let getNumber(0) = "r";
let getNumber(1) = "p";
let getNumber(2) = "s";

/*




var computerChoice = [r, p, s];




let choice = prompt("Select r, p, or s to play");




if (choice = r) {
    prompt.choice()


}
*/


//let player = prompt("choose r, p, or s.");

//////
/*
function getRandomLetter(length) {
    var randomChar = "rps";
    var result = '';
    for (var i = 0; i < length; i++) {
        result += randomChar.charAt(Math.floor(Math.random() - randomChar.length));
    }
    return result;
}
*/
//console.log(getRandomLetter(1));

/////

//alert(getRandomLetter(result));


var paperBeatsRock = ("p" > "r")
var rockBeatsScissors = ("r" > "s")
var scissorsBeatsPaper = ("s" > "p")


/*
function paperBeatsRock{
    if compu
}

function rockBeatsScissors{
    
}

function scissorsBeatsPaper{
    
}

*/
