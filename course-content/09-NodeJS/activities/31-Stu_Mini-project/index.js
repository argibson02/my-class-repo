const fs = require('fs');
const inquirer = require("inquirer");
const mooCow = require("./makeHTML.js");
console.log(mooCow);


const questions = [
    {
        type: "input",
        message: "What is your name?",
        name: "name"
    }
    ,
    {
        type: "input",
        message: "What is your location?",
        name: "location"
    }
    ,
    {
        type: "input",
        message: "Write your about me here ;) :",
        name: "bio"
    }
    ,
    {
        type: "input",
        message: "What is your LinkedIn URL?",
        name: "linkedin"
    }
    ,
    {
        type: "input",
        message: "What is your GitHub username?",
        name: "github"
    }
];



inquirer
    .prompt(questions)
    .then((response) => {
       let genHTML = mooCow(response);
        fs.writeFile("portfolio.html", genHTML, (err) => {
            err ? console.error(err) : console.log('Success!')
        })
        console.log(response);

    })

