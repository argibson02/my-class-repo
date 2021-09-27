var keyEl = document.querySelector("#key");
var codeEl = document.querySelector("#code");
var statusEl = document.querySelector("#status");



function keydownAction(event) {
  // TODO: Complete keydown function
  console.log(event);

  var keyPress = event.key;
  var keyCode = event.code;

  document.querySelector("#key").textContent = keyPress;
  document.querySelector("#code").textContent = keyCode;
  document.querySelector("#status").textContent = "KEYDOWN event";



  event.preventDefault();
  var upKey = event.key

}

function keyupAction(event) {
	
  document.querySelector("#status").innerHTML = "KEYUP Event";
}

document.addEventListener("keydown", keydownAction);
document.addEventListener("keyup", keyupAction);
// TODO: Add Event Listener for "keydown" event

