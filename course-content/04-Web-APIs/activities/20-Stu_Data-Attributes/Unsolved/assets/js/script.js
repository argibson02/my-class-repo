var container = document.querySelector(".container");

container.addEventListener("click", function(event) {
  var element = event.target;
console.log("On click")
  // TODO: Complete function

 if (element.matches(".box")) {
    var state = element.getAttribute("data-state");
  
     if (state === "hidden") {
       element.textContent = element.getAttribute("data-number");
       element.dataset.state = "visible";
      // element.setAttribute("date-state", "visible");
      console.log("hidden")
    }
    else {
      element.textContent = "";
      element.dataset.state = "hidden";
      //element.setAttribute("data-state", "hidden");
        console.log("visible")
    }
 }
});


console.log("JS")



 // element.setAttribute("data-number", "animate");
     // element.getAttribute("src", element.getAttribute("animate"));

           //element.getAttribute("src", element.getAttribute("hidden"));
