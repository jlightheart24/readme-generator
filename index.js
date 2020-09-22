const inquirer = require('inquirer');
const { AsyncLocalStorage } = require('async_hooks');
const { type } = require('os');

const promptUser = testOutput => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?'
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your projects name?'
        },
        {
            type: 'input',
            name: 'desciption',
            message: 'Give a description about your project.'
        },
        {
            type: 'checkbox',
            name: 'language',
            message: 'What languages did you use',
            choices: ['HTML', 'CSS', 'JavaScript', 'Bootstap', 'ES6', 'Node'] 
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the intended usage of your project'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username'
        },
        {
            type: 'confirm',
            name: 'confirmImage',
            message: 'Would you like to use any images'
        },
        {
            type: 'input',
            name: 'image',
            message: 'What will you name the images? (put the images in the assets folder under images)'
        }
    ])
};

promptUser()

// const fs = require('fs');
// const generatePage = require('./page-template.js');

// const readmeDataArgs = process.argv.slice(2, process.argv.length);

// const [name, age] = readmeDataArgs;

// fs.writeFile('./readme.MD', generatePage(name, age), err => {
//     if (err) throw err;

//     console.log('Readme created! Checkout the readme.MD file to see the output!')
// });