const fs = require("fs");
const axios = require("axios");
const inquirer = require("inquirer");

inquirer
  .prompt({
    message: "Enter your GitHub username",
    name: "username"
  })
  .then(function ({ username }) {
    const queryUrl = `https://api.github.com/users/${username}/repos?per_page=100`;

    repoarray = [];
    axios
      .get(queryUrl)
      .then(function (response) {
        // console.log(response);
        for (name of response.data) {
          repoarray.push(name.value);
        }
        console.log(repoarray);
      });
  });




