writeReadMe = (objectArr) => {
    console.log(objectArr);
    return `
## ${objectArr[0].project}

## Developer
* ${objectArr[0].name}

## Overview:
${objectArr[0].description}

## Built With:
* ${objectArr[0].language}

## Links:
GitHub Repository: ${objectArr[0].github}

GitHub Published Site: ${objectArr[0].link}
    
## Image Name: 
![Working Project Screenshot](./assets/images/empty-portfolio.PNG)
${objectArr[1].location}
`;
}

module.exports = writeReadMe