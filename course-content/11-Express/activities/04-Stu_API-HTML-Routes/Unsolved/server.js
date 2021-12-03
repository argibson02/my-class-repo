// TODO: Import express
const express  = require("express")
const terms = require("./terms.json")
const app = express();

// TODO: Import 'terms.json' file
const PORT = 3001;


app.get('/', (req, res) => {
  res.send("visit ");
});

// TODO: Initialize app variable
app.get("/api/terms", (req, res) => {
    res.json(terms);
}
)

// TODO: Create a route for a GET request that will return the content of our `termData.json` file

app.listen(PORT, () =>
  console.log(`Example app listening at http://localhost:${PORT}`)
);
