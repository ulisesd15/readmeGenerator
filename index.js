// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input

inquirer
.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of this project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Write down a description of the project.',
    },
    {
      type: 'input',
      name: 'installSteps',
      message: 'What are the steps required to install this project?',
    },
    {
      type: 'input',
      name: 'usageInfo',
      message: 'What does the project do?',
    },
    {
      type: 'input',
      name: 'contribution',
      message: 'How can others contribute to this project?',
    },
    {
      type: 'input',
      name: 'testInst',
      message: 'How can use this project?',
    },
    {
        type: 'choices',
        name: 'liscence',
        message: '',
    },
    {
        type: 'iput',
        name: 'username',
        message: 'What is your github username?',
    },
    {
        type: 'iput',
        name: 'email',
        message: 'What is your email adress?',
    },
])
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
