var emailInput = document.querySelector("#email");
var passwordInput = document.querySelector("#password");
var signUpButton = document.querySelector("#sign-up");
var msgDiv = document.querySelector("#msg");
var userEmailSpan = document.querySelector("#user-email");
var userPasswordSpan = document.querySelector("#user-password");

var localEmail = localStorage.getItem("localemail"); //HERE
var localPass =  localStorage.getItem("localpassword"); //HERE

console.log(email);
console.log(password);


renderLastRegistered();

function displayMessage(type, message) {
  msgDiv.textContent = message;
  msgDiv.setAttribute("class", type);
}

function renderLastRegistered() {
  // TODO: Retrieve the last email and password and render it to the page

  var email = localStorage.getItem("localemail"); //HERE
  var password =  localStorage.getItem("localpassword"); //HERE
  
  console.log(email);
  console.log(password);
  
  userEmailSpan();
  userPasswordSpan();
}

signUpButton.addEventListener("click", function(event) {
  event.preventDefault();

  var email = document.querySelector("#email").value;
  var password = document.querySelector("#password").value;

  if (email === "") {
    displayMessage("error", "Email cannot be blank");
  } else if (password === "") {
    displayMessage("error", "Password cannot be blank");
  } else {
    displayMessage("success", "Registered successfully");

  // TODO: Save email and password to localStorage and render the last registered user
     console.log(email, typeof email);
     console.log(password, typeof password);
    
    localStorage.setItem("email", email);   //HERE
    localStorage.setItem("password", password); //HERE
    renderLastRegistered();


  }
});
