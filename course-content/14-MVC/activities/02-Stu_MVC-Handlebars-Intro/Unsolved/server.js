// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const path = require('path');
const hbs = exphbs.create({});


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3001;

// TODO: Describe what the following two lines of code are doing.
// We are creating the hbs engine. app.engine sets up the engine with hbs using express
app.engine('handlebars', hbs.engine);
// registers the hbs engine with express
app.set('view engine', 'handlebars');

// join directory name with public
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('./controllers/dish-routes'));

// Starts the server to begin listening
app.listen(PORT, () => {
  console.log('Server listening on: http://localhost:' + PORT);
});
