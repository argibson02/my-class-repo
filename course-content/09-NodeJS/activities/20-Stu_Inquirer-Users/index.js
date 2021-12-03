const inquirer = require('inquirer');

inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your name?',
      name: 'name',
    },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'languages',
      choices: [ "html", new inquirer.Separator(), "java", new inquirer.Separator(), "css", new inquirer.Separator(),]
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'communication',
      choices: [ "Email", "Phone", "In-person"]
      
    },
  ])
  .then((response) => {
    console.log(response)

  });
