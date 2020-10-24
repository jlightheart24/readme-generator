const inquirer = require('inquirer');
const generatePage = require('./page-template');
const fs = require('fs');
var objectArr = [];

const promptUser = () => {
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
            name: 'description',
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
            name: 'link',
            message: 'What is the link to your project?'
        },
        {
            type: 'input',
            name: 'github',
            message: 'What is the link to your github respository?'
        }
    ])
    .then(userPrompt => {
        objectArr.push(userPrompt)    
    });
};


const promptImages = () => {

    console.log(`
    ===============
    Add a New Image
    ===============
    `)

    return inquirer.prompt([
        {
            type: 'confirm',
            name: 'confirmImage',
            message: 'Would you like to use any images? If so add any images in the assets folder now. Confirm when finshed.'
        },
        {
            type: 'input',
            name: 'location',
            message: 'What is the file location? eg(./assets/images/image.PNG)'
        },
        {
            type: 'input',
            name: 'image',
            message: 'What will you name the image? (put the images in the assets folder under images)'
        },
        {
            type: 'confirm',
            name: 'confirmAddImage',
            message: 'Would you like to add another image?',
            default: false
        }
    ])
    .then(imageData => {
        if (imageData.confirmAddImage) {
            return promptImages(imageData)
        } else {
            objectArr.push(imageData);
            return fs.writeFileSync('./README.md', generatePage(objectArr), err => {
                if (err) throw new Error(err);
        
                console.log('success!')
            });
        }
    });
};

promptUser()
    .then(promptImages)
    // .then(writeToFile)
;

// function writeToFile(objectArr) {
//     return fs.writeFileSync('./README.md', objectArr, err => {
//         if (err) throw new Error(err);

//         console.log('success!')
//     });
// };