// 4. Develop a Shape-Geometry System
// Create a Shape class with a method calculateArea().
// Create Circle and Rectangle classes that extend Shape and implement calculateArea().
// Circle should take radius, and Rectangle should take width and height.
// Abstraction (✅ Possible in JavaScript)
// JavaScript: Uses base classes with empty methods that subclasses must override.

class Shape {

    // like abstract method in java language 
    calculateArea() {
        throw new Error("calculateArea() must be implemented in derived classes");
    }
}

class Circle extends Shape {

    constructor(radius) {
        super();
        this.radius = radius
    }

    calculateArea() {
        let area = Math.PI * this.radius * this.radius
        console.log('area of circle is: ', area)
    }
}

class Rectangle extends Shape {
    constructor(height, width) {
        super();
        this.height = height;
        this.width = width;
    }

    calculateArea() {
        let area = this.height * this.width
        console.log('area of rectangle is: ', area)
    }
}

let c1 = new Circle(4);
c1.calculateArea();


let r1 = new Rectangle(4, 3);
r1.calculateArea();