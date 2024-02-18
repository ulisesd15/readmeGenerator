const inquirer = require('inquirer');
const fs = require('fs');

const promptUser = () => {
  return inquirer.prompt([
    { 
      type: 'input',
      name: 'title',
      message: 'What is the title of this project?'
    },
    { 
      type: 'input',
      name: 'description',
      message: 'Write down a description of the project.' 
    },
    {
      type: 'input',
      name: 'installSteps',
      message: 'What are the steps required to install this project?' 
    },
    { 
      type: 'input', 
      name: 'usageInfo', 
      message: 'What does the project do?' 
    },
    { 
      type: 'input', 
      name: 'contribution', 
      message: 'How can others contribute to this project?' 
    },
    { 
      type: 'input', 
      name: 'testInst', 
      message: 'How can users use this project?(provide examples of usage)' 
    },
    { 
      type: 'list', 
      name: 'license', 
      message: 'Choose a license for this project:', 
      choices: ['MIT', 'Apache', 'GPL' ,'none'] 
    },
    { 
      type: 'input', 
      name: 'username', 
      message: 'What is your GitHub username?' 
    },
    { 
      type: 'input', 
      name: 'email', 
      message: 'What is your email address?' 
    },
  ]);
};

function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`${fileName} file created successfully.`);
  });
}

const generateMD = (data) => `
# ${data.title}

## Description
${data.description}

## Table of Contents
- Installation Steps
- Usage Info
- Credits
- Licensess
- Creator Info

## Installation Steps
${data.installSteps}

## Usage Info
${data.usageInfo}

## Credits
${data.contribution}

## Licenses
${data.license}

### Creator Info
- GitHub Username: ${data.username}
- Email Address: ${data.email}
`;

const init = () => {
  promptUser()
    .then((answers) => writeToFile('README.md', generateMD(answers)))
    .then(() => console.log('Successfully wrote README.md'))
    .catch((err) => console.error(err));
};

init();