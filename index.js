const inquirer = require('inquirer');
const generatePage = require('./page-template');
const fs = require('fs');
var objectArr = [];

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter your name!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is your github username?',
            validate: userInput => {
                if (userInput) {
                    return true;
                } else {
                    console.log('Please enter your github username!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is your email? (To be used to recieve questions about the product from users)',
            validate: emailInput => {
                if (emailInput) {
                    return true;
                } else {
                    console.log('Please enter your email!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'project',
            message: 'What is your projects name?',
            validate: projectInput => {
                if (projectInput) {
                    return true;
                } else {
                    console.log('Please enter your project title!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'description',
            message: 'Give a description about your project.',
            validate: dscrpInput => {
                if (dscrpInput) {
                    return true;
                } else {
                    console.log('Please enter a description of your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'link',
            message: 'What is the link to your project?',
            validate: linkInput => {
                if (linkInput) {
                    return true;
                } else {
                    console.log('Please enter a link for your project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'usage',
            message: 'What is the intended usage of your project',
            validate: usageInput => {
                if (usageInput) {
                    return true;
                } else {
                    console.log('Please give the intended use of this project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'installation',
            message: 'Give the user instructions on how to install the project.',
            validate: instInput => {
                if (instInput) {
                    return true;
                } else {
                    console.log('Please give the user instructions on how to install the project!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'test',
            message: 'Give the user some tests to use with the product.',
            validate: testInput => {
                if (testInput) {
                    return true;
                } else {
                    console.log('Please give some tests that the user can use!');
                    return false;
                }
            }
        },
        {
            type: 'rawlist',
            name: 'license',
            message: 'What license did you use?',
            choices: ['GNU-GPL', 'GNU-LGPL', 'GNU-AGPL', 'Apache-2.0', 'Modified-BSD', 'CCO-1.0', 'Expat', 'MPL']
        }
    ])
    .then(userPrompt => {
        objectArr.push(userPrompt)    
    });
};


const promptQuestions = () => {

    console.log(`
    ===================================
    Add a New Frequently Asked Question
    ===================================
    `)

    return inquirer.prompt([
        {
            type: 'input',
            name: 'question',
            message: 'What is the question?',
            validate: questionInput => {
                if (questionInput) {
                    return true;
                } else {
                    console.log('Please enter a question!');
                    return false;
                }
            }
        },
        {
            type: 'input',
            name: 'answer',
            message: 'What is the answer to this question?',
            validate: answerInput => {
                if (answerInput) {
                    return true;
                } else {
                    console.log('Please enter the answer!');
                    return false;
                }
            }
        },
        {
            type: 'confirm',
            name: 'confirmAddQuestion',
            message: 'Would you like to add another question?',
            default: false
        }
    ])
    .then(questionData => {
        if (questionData.confirmAddQuestion) {
            objectArr.push(questionData);
            return promptQuestions(questionData);
        } else {
            objectArr.push(questionData);
            return fs.writeFileSync('./README.md', generatePage(objectArr), err => {
                if (err) throw new Error(err);
        
                console.log('success!')
            });
        }
    });
};

promptUser()
    .then(promptQuestions)
;