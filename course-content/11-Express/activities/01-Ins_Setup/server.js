const express = require('express');
const path = require('path');

const app = express();
const PORT = 3001;

app.use(express.static('public'));

//Note: Because we set up middleware for the public folder, 
//Express.js automatically looks for an index.html in the public folder to send when a user visits the root path. 
//Because we do have an index.html file in the public folder, that is shown in the browser now. 
//If we didn't have an index.html file in the public folder, the browser would display the message Navigate to /send or /routes.
app.get('/', (req, res) => res.send('Navigate to /send or /routes'));

app.get('/send', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/sendFile.html'))
);

app.get('/routes', (req, res) =>
  res.sendFile(path.join(__dirname, 'public/routes.html'))
);

//With all Express.js apps, it is important to initialize the server using the app.listen() method.
//The listen() method accepts a port as the first argument and a callback function as the second argument. The listen() method is responsible for listening for incoming connections on the specified port:
app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
