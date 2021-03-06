var badRequestUrl = 'https://api.github.com/unicorns';
var redirectUrl = './404.html';

fetch(badRequestUrl).then(function (response) {
  // Use a conditional to check the response status.
  console.log(response)
  if (response.status === 404) {
    window.location.replace(redirectUrl);
    }
  // If that status equals the conditional, then redirect to the 404 page.
  else {
     return response.json();
  }
});
