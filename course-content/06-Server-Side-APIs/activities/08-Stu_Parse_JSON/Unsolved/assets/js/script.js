// TODO: Edit the URL to get only 5 issues of Twitter's Chill repo
var requestUrl = 'https://api.github.com/repos/twitter/chill/issues';

fetch(requestUrl)
  .then(function (response) {
    return response.json();
  })
  .then(function (var1) {
    console.log('Github Repo Issues \n----------');
    console.log(var1);
    // TODO: Loop through the response
    for (var i = 0; i < 4; i++) {
    console.log("********");
    console.log("URL", var1[i].url);
    console.log("Login", var1[i].user.login);
    }
    // TODO: Console log each issue's URL and each user's login
  });
