// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
const utiis = require('generateMarkdown');
const content = JSON.stringify(output);


// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'name',
    },
    {
        type: 'checkbox',
        message: 'Your Selected Sections for a README',
        name: 'sections',
        choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'License', 'Contributing', 'Tests', 'Questions'],
      },
      {
        type: 'list',
        message: 'Your License',
        name: 'licenses',
        choices: ['ISC', 'MIT', 'GNU', 'GPLv3'],
      },
    {
        type: 'username',
        message: 'GitHub username?',
        name: 'username',
      },
    {
        type: 'email',
        message: 'Email Address?',
        name: 'email',
    },
    ])

  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });


// TODO: Create a function to write README file
function writeToFile(./utils/.DS_Store/, data, (err) {
    if(err) {
        return console.log(err);
    }
    console.log("The file was saved!");
});

// TODO: Create a 
function init() {
  promptUser()
    // Use writeFile method imported from fs.promises to use promises instead of
    // a callback function
    .then((answers) => writeFile('index.html', generateHTML(answers)))
    .then(() => console.log('Successfully wrote to index.html'))
    .catch((err) => console.error(err));
}

// Function call to initialize app
init = require('init-package-json');
