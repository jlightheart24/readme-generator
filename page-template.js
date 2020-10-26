writeReadMe = (objectArr) => {
    console.log(objectArr);
    return `
# <p style="text-align: center"> ${objectArr[0].project}

# Table of Contents
* [Description](#<description)
* [Installation](#<installation)
* [Usage](#<usage)
* [License](#<license)
* [Contributing](#<contributing)
* [Tests](#<tests)
* [Questions](#<questions)

# Description: 

${objectArr[0].description}

* ${objectArr[0].link}

# Installation:

${objectArr[0].installation}

# Usage:

${objectArr[0].usage}

# License:

${objectArr[0].license}


# Contributing:

${objectArr[0].name}

# Tests: 

${objectArr[0].test}

# Questions: 
Frequently Asked Questions
* Q: ${objectArr[1].question}
* A: ${objectArr[1].answer}

Please email me or go to my github profile with any further question.
* email: ${objectArr[0].email}
* github: github.com/${objectArr[0].github}
`;
}

module.exports = writeReadMe