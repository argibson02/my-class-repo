var tipEl = document.querySelector("#tip-percentage");
var totalEl = document.querySelector("#total");
var submitEl = document.querySelector("#submit");

function calculateTip(total, tipPercentage) {
  //total.preventDefault();
  //tipPercentage.preventDefault();
  var roundedResult = (total * tipPercentage).toFixed(2);
  return roundedResult;
}

function calculateTotal(total, tipAmount) {
  //total.preventDefault();
  //tipAmount.preventDefault();
  return parseFloat(total) + parseFloat(tipAmount);
}

function addTip(event) {
  console.log(event);
  event.preventDefault();

  var tipPercentage = tipEl.value * .01;
  var total = totalEl.value;
 // if(tipEl.value !== "" && totalEl !== "") {
  var tipAmount = calculateTip(total, tipPercentage);
  var newTotal = calculateTotal(tipAmount, total);
  document.querySelector("#tip-amount").textContent = tipAmount;
  document.querySelector("#new-total").textContent = newTotal.toFixed(2);
//}
// else {
  //document.querySelector("#new-total").textContent = "please enter a value";
//}
}


submitEl.addEventListener("click", addTip);
