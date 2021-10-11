var requestUrl = 'https://api.github.com/users';

//Browser XMLHttpRequest, built in the browser and require more code.
//An XMLHttpRequest, or XHR for short, was the predecessor to fetch(). XHR requests involve much more code than a simple fetch(), as shown in the following code:
//https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest
//Despite its name, XMLHttpRequest can be used to retrieve any type of data, not just XML.
var xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState === XMLHttpRequest.DONE) {
    console.log('XMLHttpRequest Response \n-------------');
    console.log(xhr.response);
  }
};
xhr.open('GET', requestUrl);
xhr.send();

// AJAX call requires a third party library, jQuery
//AJAX is another alternative to the Fetch API. AJAX requests require the use of the third-party library jQuery to work, as shown in the following example:
$.ajax({
  url: requestUrl,
  method: 'GET',
}).then(function (response) {
  console.log('Ajax Reponse \n-------------');
  console.log(response);
});




