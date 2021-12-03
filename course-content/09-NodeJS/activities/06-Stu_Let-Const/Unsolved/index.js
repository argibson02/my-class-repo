// TODO: Fix the declarations so that the function works properly.
const addGreetingMessage = (name) => {

  if (name.length > 0) {
    var message = 'Hello ' + name;
    console.log(message);
  }
  var message = 'How are you?';

  console.log(message);
};

addGreetingMessage('Tammy');

// TODO: Fix the declarations so that the function works properly.
const calloutCounter = () => {
  var counter = 5;

  while (counter > 0) {
    var callout = 'Inside the loop';
    console.log(counter, callout);
    counter--;
  }
  var callout = 'Outside of the loop';
  console.log(callout);
};

calloutCounter();

// TODO: Fix the declarations so that the function works properly.
const countMatrix = (matrix) => {
  for (let i = 0; i < matrix.length; i++) {
    var line = matrix[i];
    for (let i = 0; i < line.length; i++) {
      var element = line[i];
      console.log(element);
    }
  }
};

var matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

countMatrix(matrix);
