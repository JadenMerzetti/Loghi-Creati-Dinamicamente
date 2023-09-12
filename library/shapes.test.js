const { Triangle, Square, Circle } = require("./shapes.js");

describe("Triangle test", function() {
    it("should render a blue triangle", function() {
      const shape = new Triangle();
      shape.setColor("blue");
      expect(shape.render()).toEqual(
        '<polygon points="150, 18 244, 182 56, 182" fill="blue" />'
      );
    });
  });
  
  describe("Square test", function() {
    test("test for a square with a purple background", function() {
      const shape = new Square();
      shape.setColor("purple");
      expect(shape.render()).toEqual(
        '<rect x="73" y="40" width="160" height="160" fill="purple" />'
      );
    });
  });

  describe("Circle test", function() {
    test("test for a circle with a #ca00ca background", function() {
      const shape = new Circle();
      shape.setColor("#ca00ca");
      expect(shape.render()).toEqual(
        '<circle cx="150" cy="115" r="80" fill="#ca00ca" />'
      );
    });
  });
  
  
