fetch(
  // Explain each parameter in comments below.
//   'https://api.github.com/repos/nodejs/node/issues? --base api URL
//    per_page=10&  - display 10 per page
//    state=open&  -  get open issues
//    sort=created&   - sort by created - I assume date
//    direction=desc  - have sort sort decending -newest to oldest
//
//
//
//
//
//
//
// 
  'https://api.github.com/repos/nodejs/node/issues?per_page=10&state=open&sort=created&direction=desc'


)
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    console.log(data);
  });
// Parameter explanation.
