const fs = require('fs');
const generatePage = require('./page-template.js');

const readmeDataArgs = process.argv.slice(2, process.argv.length);

const [name, age] = readmeDataArgs;

fs.writeFile('./readme.MD', generatePage(name, age), err => {
    if (err) throw err;

    console.log('Readme created! Checkout the readme.MD file to see the output!')
});