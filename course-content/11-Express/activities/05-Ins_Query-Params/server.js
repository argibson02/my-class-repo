const express = require('express');
const termData = require('./terms.json');

const PORT = 3001;

const app = express();

// GET route to get all of the terms
app.get('/api/terms', (req, res) => res.json(termData));

// GET route that returns any specific term
app.get('/api/terms/:term', (req, res) => {
  // Coerce the specific search term to lowercase
  const requestedTerm = req.params.term.toLowerCase();

  // Iterate through the terms name to check if it matches `req.params.term`
  for (let i = 0; i < termData.length; i++) {
    if (requestedTerm === termData[i].term.toLowerCase()) {
      return res.json(termData[i]);
    }
  }

  // Return a message if the term doesn't exist in our DB
  return res.json('No match found');
});

// Fallback route for when a user attempts to visit routes that don't exist
app.get('*', (req, res) =>
  res.send(
    `Make a GET request using Insomnia to <a href="http://localhost:${PORT}/api/terms">http://localhost:${PORT}/api/terms</a>`
  )
);

// Listen for connections
app.listen(PORT, () =>
  console.info(`Example app listening at http://localhost:${PORT} 🚀`)
);


// // Example: 

// // Which One?

// app.get("/r/awwww", function(req, res) {
//   // What does this code do?
//   var SubRedditToQuery = "awwww"
  

//   // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

//   // What does this code do?
//   return res.json(results);
// });


// app.get("/r/politics", function(req, res) {
//   // What does this code do?
//   var SubRedditToQuery = "politics"
  

//   // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

//   // What does this code do?
//   return res.json(results);
// });


// app.get("/r/lastimages", function(req, res) {
//   // What does this code do?
//   var SubRedditToQuery = "lastimages"
  

//   // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

//   // What does this code do?
//   return res.json(results);
// });

// app.get("/r/kidsfallingover", function(req, res) {
//   // What does this code do?
//   var SubRedditToQuery = "kidsfallingover"
  

//   // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

//   // What does this code do?
//   return res.json(results);
// });

// app.get("/r/movies", function(req, res) {
//   // What does this code do?
//   var SubRedditToQuery = "movies"
  

//   // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

//   // What does this code do?
//   return res.json(results);
// });

// app.get("/r/worldnews", function(req, res) {
//   // What does this code do?
//   var SubRedditToQuery = "worldnews"
  

//   // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

//   // What does this code do?
//   return res.json(results);
// });


// app.get("/r/ProgrammerHumor", function(req, res) {
//   // What does this code do?
//   var SubRedditToQuery = "ProgrammerHumor"
  

//   // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

//   // What does this code do?
//   return res.json(results);
// });


// app.get("/r/SequelMemes", function(req, res) {
//   // What does this code do?
//   var SubRedditToQuery = "SequelMemes"
  

//   // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

//   // What does this code do?
//   return res.json(results);
// });


// app.get("/r/ChildrenFallingOver", function(req, res) {
//   // What does this code do?
//   var SubRedditToQuery = "ChildrenFallingOver"
  

//   // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

//   // What does this code do?
//   return res.json(results);
// });


// // ******************************

// // OR

// app.get("/r/:subreddit", function(req, res) {
//   // What does this code do?
//   var SubRedditToQuery = req.params.subreddit;
  

//   // var results = Make a Database Query to get back all Post for SubRedditToQuery limit 20 order by date
  

//   // What does this code do?
//   return res.json(results);
// });
