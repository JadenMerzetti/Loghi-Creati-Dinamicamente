const fs = require("fs");
const inquirer = require("inquirer");

const questions = [
    {
        type: 'input',
        name: 'letters',
        message: 'Type three letters for your logo:',
    },
    {
        type: 'input',
        name: 'color',
        message: 'Type the color you would like to choose for your text:',
        validate: (input) => /^#[0-9A-Fa-f]{6}$/.test(input),
    },
    {
        type: 'list',
        name: 'shape',
        message: 'Choose from the list of shapes on which to base your logo:',
        choices: ["Triangle", "Circle", "Square"], 
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color (e.g., #FF0000):',
        validate: (input) => /^#[0-9A-Fa-f]{6}$/.test(input),
    },
];


function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) {
            console.error("Error writing to file:", err);
        } else {
            console.log(`Successfully created ${fileName}`);
        }
    });
}

function init() {
    inquirer
        .prompt(questions)
        .then((data) => {
            const svgLogo = generateLogo(data);
            writeToFile("logo.svg", svgLogo);
        })
        .catch((error) => {
            console.error("Error:", error);
        });
}

init();
