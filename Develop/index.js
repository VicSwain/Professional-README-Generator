// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');



// TODO: Create an array of questions for user input
const readMeQuestions = [
    {
        type: 'input',
        message: 'What is the tile of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Please provide a description of your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Provide installation intructions if needed, add none if this is not required.',
        name: 'installation',
    },
    {   
        type: 'input',
        message: 'Please provde the usage of your project.',
        name: 'usage',
    },
    {
        type: 'input',
        message: 'Please list any contributing parties, N/A if none.',
        name: 'contributing',
    }, 
    {
        type: 'list',
        message: 'What license does your project hold?',
        name: 'license',
        choices: ['Apache 2.0', 'GNU v3.0', 'MIT', 'BSD 2-Clause', 'BSD 3-Clause', 'Boost Software 1.0', 'Creative Commons Zero v1.0', 'Eclpse Public 2.0', 'GNU Affero V3.0', 'GNU V2.0', 'GNU Lesser v2.1', 'Mozilla 2.0', 'The Unlicense', 'None'],
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
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(readMeQuestions)
    // .then((readMeData) => {
    //   console.log(readMeData)
    //   const template = createReadMeTemplate(readMeData)
    //   fs.writeFileSync("sampleReadMe.md", template)
    //   // readMeData.confirm === readMeData.password // condition
    //   //   ? console.log('Success!') // if the condition is true
    //   //   : console.log('You forgot your password already?!') // else if the condition is false
    //  } );
    }


// Function call to initialize app
init();
