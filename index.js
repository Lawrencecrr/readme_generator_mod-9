// TODO: Include packages needed for this application
const { rejects } = require('assert');
const fs = require('fs');
const inquirer = require('inquirer');
const { resolve } = require('path');
const generateReadMe = require('./utils/generateMarkdown');


// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    // description  
    {
        type: 'input',
        name: 'description',
        message: 'Please provide a description of your project.'
    },
    // installation instructions
    {
        type: 'input',
        name: 'installation',
        message: 'Please provide installation instructions for your project.'
    },
    // usage information
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide usage instructions for your project.'
    },
    // contribution guidelines
    {
        type: 'input',
        name: 'contributing',
        message: 'Please provide contribution guidelines for your project.'
    },
    // test instructions 
    {
        type: 'input',
        name: 'tests',
        message: 'Please provide test instructions for your project.'
    },
    // license options 
    {
        type: 'checkbox',
        name: 'license',
        message: 'Under what license is this application covered?',
        choices: ['GNU AGPLv3', 'GNU GPLv3', 'GNU LGPLv3', 'Mozilla Public License 2.0', 'Apache License 2.0', 'MIT License', 'Boost Software License 1.0', 'The Unlicense']
    },
    // github username 
    {
        type: 'input',
        name: 'github',
        message: 'What is your Github username?'
    },
    // email address 
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return new promises((resolve, reject) => {
        fs.writeFile('./CreatedReadme/README.md', data, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File Created!'
            });
        });
    });
};

// TODO: Create a function to initialize app
function init() {
    return inquirer
    .prompt(questions)
    .then((answers) => {
        return generateReadMe(answers);
    })
    .then((markdown) => {
        return writeToFile(markdown);
    })
    .catch(err => {
        console.log(answ);
    });
}

// Function call to initialize app
init();
