// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const readMeQuestions = [
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
    },   
    {
        type: 'input',
        message: 'Please provide installation intructions if needed, add none if this is not required.',
        name: 'installation',
    },
    {   
        type: 'input',
        message: 'Please provide the usage of your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list any contributing parties, N/A if none.',
        name: 'contributing',
    },
    {
        type: 'input',
        message: 'Please enter the testing instructions.',
        name: 'tests',
    },
    {
        type: 'list',
        message: 'What license does your project hold?',
        name: 'license',
        choices: ['Apache 2.0', 'GPL v3.0', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software 1.0', 'Creative Commons Zero v1.0','Mozilla 2.0', 'The Unlicense', 'None'],
    }, 
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'username',
    },
    {
        type: 'input',
        message: 'What is your e-mail address?',
        name: 'email',
    },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
const template = generateMarkdown(data)
fs.writeFileSync(fileName, template)
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(readMeQuestions)
    .then((data) => {
    writeToFile('sampleREADME.md', data);
    });
    }


// Function call to initialize app
init();
