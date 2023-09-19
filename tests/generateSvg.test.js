const generateSvg = require("../utils/generateSvg");

describe('generateSvg', () => {
 
 
    it('should generate a circle SVG', () => {

      //1️⃣ARRANGE
      const text = "HII";
      const textColor = "black";
      const shapeColor = "red";
      const shape = "Circle";
      const templateTest = `<svg version="1.1" width="300" height="200"> <circle cx="150" cy="100" r="80" fill="${shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
      //2️⃣ACT 
      //create new object 
      const svg = generateSvg({shape, text, textColor, shapeColor});

      //3️⃣ASSERT 
      
      expect(svg).toEqual(templateTest);
    });
    it('should generate a square SVG', () => {

      //1️⃣ARRANGE
      const text = "HII";
      const textColor = "black";
      const shapeColor = "red";
      const shape = "Square";
      const templateTest = `<svg version="1.1" width="300" height="200"><rect width="100%" height="100%" fill="${shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
      //2️⃣ACT 
      //create new object 
      const svg = generateSvg({shape, text, textColor, shapeColor});

      //3️⃣ASSERT 
      
      expect(svg).toEqual(templateTest);
    });
    it('should generate a triangle SVG', () => {

      //1️⃣ARRANGE
      const text = "HII";
      const textColor = "black";
      const shapeColor = "red";
      const shape = "Triangle";
      const templateTest = `<svg version="1.1" width="300 "height="200"><polygon points ="150,45 300,300 0,300" fill="${shapeColor}"/><text x="150" y="175" font-size="60" text-anchor="middle" fill="${textColor}">${text}</text></svg>`
      //2️⃣ACT 
      //create new object 
      const svg = generateSvg({shape, text, textColor, shapeColor});

      //3️⃣ASSERT 
      
      expect(svg).toEqual(templateTest);
    });
  });