//Include Packages Needed for Application
const fs = require("fs");
const inquirer = require("inquirer");
const generateSvg = require("./utils/generateSvg")

//Create an Array of Questions for User Input 

//HOW TO VALIDATE FOR CORRECT COLOR and SHAPE KEYWORD
const questions = [
  {
    type: "input",
    message: "Welcome to the SVG Logo Generator! What letters or letter would you like to display in your logo? You may only enter up to 3 letters. Hint: This could be your initials or a company acronym.",
    name: "text",
  },
  {
    type: "input",
    message: "What color would you like the text to be? This can be a color keyword, e.g, blue, black, red, or a hexadecimal number, e.g, #E8B5E1",
    name: "textColor",
  },
  {
    type: "list",
    message: "What shape would you like the logo to be?",
    name: "shape",
    choices: ["Circle", "Triangle", "Square"],
  },
  {
    type: "input",
    message: "What color would you like the shape to be? This can be a color keyword, e.g, purple, gray, green, or a hexadecimal number, e.g, #E8B5E1.",
    name: "shapeColor",
  }
]

//Create a Function to Make a SVG File 
const createSVG = (fileName, data) => {
  const template = generateSvg(data);
  fs.writeFile(fileName, template, (err) => {
    err ? console.error(err) : console.log("Generated logo.svg");
  });
}

//Create a Function to Initialize App 
const init = () => {
  // createSVG("./output/logo.svg", testingQuestions);
  inquirer.prompt(questions).then((data) => {
    createSVG("./output/logo.svg", data);
  });
}

//Call Function to Initialize App 

init();
