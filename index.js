const fs = require("fs");
const inquirer = require("inquirer");
const { Triangle, Square, Circle } = require("./library/shapes");

function writeToFile(fileName, answers) {
    let svgString = "";
    svgString =
    '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
    svgString += "<g>";
    svgString += `${answers.shape}`;
    let shapeChoice;
    if (answers.shape === "Triangle") {
      shapeChoice = new Triangle();
      svgString += `<polygon points="150, 18 244, 182 56, 182" fill="${answers.shapeBackgroundColor}"/>`;
    } else if (answers.shape === "Square") {
      shapeChoice = new Square();
      svgString += `<rect x="73" y="40" width="160" height="160" fill="${answers.shapeBackgroundColor}"/>`;
    } else {
      shapeChoice = new Circle();
      svgString += `<circle cx="150" cy="115" r="80" fill="${answers.shapeBackgroundColor}"/>`;
    }
    svgString += `<text x="150" y="130" text-anchor="middle" font-size="40" fill="${answers.textColor}">${answers.text}</text>`;
    svgString += "</g>";
    svgString += "</svg>";

    fs.writeFile(fileName, svgString, (err) => {
        err ? console.log(err) : console.log("Generated logo.svg");
      });
    }

    function interrogation() {
        const colorRegex = /^(#[0-9A-Fa-f]{6}|[a-zA-Z]+)$/;
      
        inquirer
          .prompt([
            {
              type: "input",
              message:
                "What text would you like your logo to display? (Enter up to three characters)",
              name: "text",
            },
            {
              type: "input",
              message:
                "Choose text color (Enter color keyword OR a hexadecimal number)",
              name: "textColor",
              validate: (input) => {
                if (input.length === 0) {
                  return "Please enter a value.";
                }
                if (!colorRegex.test(input)) {
                  return "Please enter a valid color name or hexadecimal number.";
                }
                return true;
              },
            },
            {
              type: "list",
              message: "What shape would you like the logo to render?",
              choices: ["Triangle", "Square", "Circle"],
              name: "shape",
            },
            {
              type: "input",
              message:
                "Choose shapes color (Enter color keyword OR a hexadecimal number)",
              name: "shapeBackgroundColor",
              validate: (input) => {
                if (input.length === 0) {
                  return "Please enter a value.";
                }
                if (!colorRegex.test(input)) {
                  return "Please enter a valid color name or hexadecimal number.";
                }
                return true;
              },
            },
          ])
          .then((answers) => {
            if (answers.text.length > 3) {
              console.log("Must enter a value of no more than 3 characters");
              interrogation();
            } else {
              writeToFile("logo.svg", answers);
            }
          });
      }
      
      interrogation();