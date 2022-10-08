// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const FileSystem = require('fs');
// const generateMarkdown = require('./utils/generateMarkdown');
// const utiis = require('generateMarkdown');


inquirer
  .prompt([
    {
      type: 'input',
      message: 'What is your project title?',
      name: 'name',
    },
    {
        type: 'password',
        message: 'What is your password?',
        name: 'password',
      },
    {
      type: 'checkbox',
      message: 'What languages do you know?',
      name: 'stack',
      choices: ['HTML', 'CSS', 'JavaScript', 'MySQL'],
    },
    {
      type: 'list',
      message: 'What is your preferred method of communication?',
      name: 'contact',
      choices: ['email', 'phone', 'telekinesis'],
    },
  ])
  .then((data) => {
    const filename = `${data.name.toLowerCase().split(' ').join('')}.json`;

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), (err) =>
      err ? console.log(err) : console.log('Success!')
    );
  });

// // TODO: Create an array of questions for user input
// const questions = [
//     {
//         type:
//         question:
//     }
// ];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
