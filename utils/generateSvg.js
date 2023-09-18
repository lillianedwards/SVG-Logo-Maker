let shapeCode;

//Create a Function to Generate Text
//VALIDATION FOR # of CHARS
const generateText = () => {};

//Create a Function to to Generate Text Color
const generateTextColor = () => {};

//Create a Function to Generate Shape
const generateShape = () => {
  if (shape === "Circle") {
    shapeCode = 'circle cx="150" cy="100" r="80"'
  } else if (shape === "Triangle") {
    shapeCode = 'polygon points ="100,30 200,200 0,200"'
  } else if (shape === "Square") {
    shapeCode = 'width="100%" height="100%"'
  } else {
    shapeCode = " "
  }
};

//Create a Function to to Generate Shape's Color
const generateShapeColor = () => {};

// Create a Function to Generate Markdown for SVG Logo

const generateSvg = ({text, textColor, shape, shapeColor}) => {
    generateShape();
  return `<svg
    version="1.1"
    width="300"
    height="200"
    xmlns="http://www.w3.org/2000/svg"
  >
    <${shape} fill="${shapeColor}" />

    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">
      ${text}
    </text>
  </svg>`
};

module.exports = generateSvg;
