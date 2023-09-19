
//Setting up Parent "Shape" Class to hold values that will remain the same in child classes
class Shape {
  constructor(text, textColor, shapeColor) {
    this.text = text;
    this.textColor = textColor;
    this.shapeColor = shapeColor;
  }
};

class Circle extends Shape {
  constructor(text, textColor, shapeColor) {
    super(text, textColor, shapeColor)
  }
  render () {
  return`<svg version="1.1" width="300" height="200"> <circle cx="150" cy="100" r="80" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
}};



class Square extends Shape {
  constructor(text, textColor, shapeColor, shape) {
    super(text, textColor, shapeColor)
    this.shape = shape;
  }
  render() {
    return `<svg version="1.1" width="300" height="200"><rect width="100%" height="100%" fill="${this.shapeColor}"/><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
  }
};

  class Triangle extends Shape {
    constructor(text, textColor, shapeColor, shape) {
      super(text, textColor, shapeColor)
      this.shape = shape;
    }
    render () {
    return `<svg version="1.1" width="300 "height="200"><polygon points ="150,45 300,300 0,300" fill="${this.shapeColor}"/><text x="150" y="175" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text></svg>`
    }
  };


let genShape;
generateSvg = ({shape, text, textColor, shapeColor}) => {
switch(shape) {
  case ("Triangle"):
    genShape = new Triangle(text, textColor,shapeColor, shape);
    break;
  case ("Circle"):
    genShape = new Circle(text, textColor, shapeColor, shape);
    break;
  case ("Square"):
    genShape = new Square(text, textColor, shapeColor, shape);
    break;
}
return genShape.render();
}


module.exports = generateSvg;
