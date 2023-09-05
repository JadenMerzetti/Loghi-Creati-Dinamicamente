const questions = [
    {
        type: 'input',
        name: 'shape',
        message: 'Enter the shape:'
    },
    {
        type: 'input',
        name: 'text',
        message: 'Enter the text:'
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter the shape color:'
    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter the text color:'
    }
];

inquirer.prompt(questions).then((answers) => {
    const logo = new ShapeWithText(answers.shape, answers.text, answers.shapeColor, answers.textColor);
    logo.display();
});