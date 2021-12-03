// TODO: Complete the 'counter' function below.
function counter() {
  const currentStudent = [];
  const classSize = 30;


  function studentCounter() {
    .increment()
  }

  for (var i = 0; i < 30; i++) {
    currentStudent.push(i);
    console.log(`You have seen ${currentStudent.length} in your class and you are supposed to ${classSize}.`);

  }
  return {
    displayStudents: function () {
      console.log("VVVVVVVVVVVVVVVV");
      console.log(`You have seen ${currentStudent.length} in your class and you are supposed to ${classSize}.`);
    }
  }
}

module.exports = counter;


