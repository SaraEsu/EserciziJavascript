class Figure {
 constructor(area){
   this.area = area;
 }
}

class Square extends Figure {
  constructor(side,area) {
    super(area);
    this.side = side;
  }
}

class Rectangle extends Figure {
  constructor(width, height, area) {
    super(area);
    this.width = width;
    this.height = height;
  }
}

class Circle extends Figure {
  constructor(radius, area) {
    super(area);
    this.radius = radius;
  }
}

class AreaCalculator {
  static calculate(figure) {
    let area;
    if(figure instanceof Square){
      area = (figure.side * figure.side);
    }
    else if(figure instanceof Rectangle){
      area = (figure.width * figure.height);
    }
    else if (figure instanceof Circle){
      area = (figure.radius * figure.radius * Math.PI);
    }
    else {
      console.log(`Figura non disponibile`);
    }
    return(area);
  }
}

const square = new Square(4);
const rectangle = new Rectangle(4, 2);
const circle = new Circle(5);

console.log(AreaCalculator.calculate(square));
console.log(AreaCalculator.calculate(rectangle));
console.log(AreaCalculator.calculate(circle));