// Encapsulation (✅ Possible in JavaScript)
// JavaScript: Uses # (private fields) or closures to hide data.

class Person {
    #age;  // Private field

    constructor(name, age) {
        this.name = name;
        this.#age = age; 
    }

    getAge() {
        return this.#age; // Accessing private field
    }
}

const p = new Person("John", 30);
console.log(p.getAge()); // ✅ 30
//console.log(p.#age); // ❌ SyntaxError: Private field '#age' must be declared in an enclosing class
